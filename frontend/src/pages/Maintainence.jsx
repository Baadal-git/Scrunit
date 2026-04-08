import { useState, useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@300;400&display=swap');

  .scrutin-root {
    margin: 0;
    padding: 0;
    background: #080808;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    -webkit-font-smoothing: antialiased;
  }

  .scrutin-container {
    max-width: 560px;
    width: 100%;
  }

  .scrutin-wordmark {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.22em;
    color: #e8642a;
    text-transform: uppercase;
    margin: 0 0 2.5rem;
  }

  .scrutin-heading {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(2.4rem, 6vw, 3.6rem);
    font-weight: 400;
    line-height: 1.1;
    color: #f0ede8;
    letter-spacing: -0.02em;
    margin: 0 0 1.5rem;
  }

  .scrutin-line2 {
    display: block;
    font-style: italic;
    white-space: nowrap;
  }

  .scrutin-cursor {
    display: inline-block;
    width: 2px;
    height: 0.82em;
    background: #f0ede8;
    margin-left: 3px;
    vertical-align: middle;
    position: relative;
    top: -1px;
    animation: scrutin-blink 1s step-end infinite;
  }

  .scrutin-subtext {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    font-weight: 400;
    color: #8a8480;
    line-height: 1.7;
    margin: 0 0 3rem;
  }

  .scrutin-track {
    width: 100%;
    height: 1px;
    background: #1c1a18;
    position: relative;
    overflow: hidden;
    margin-bottom: 3rem;
  }

  .scrutin-fill {
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    width: 38%;
    background: #e8642a;
    animation: scrutin-sweep 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  .scrutin-ticker-wrap {
    overflow: hidden;
    white-space: nowrap;
    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  }

  .scrutin-ticker-inner {
    display: inline-flex;
    animation: scrutin-ticker 24s linear infinite;
  }

  .scrutin-ticker-segment {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    font-weight: 300;
    color: #6b6866;;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding-right: 4rem;
  }

  .scrutin-dot {
    color: #4a4745;
    margin: 0 0.7em;
  }

  @keyframes scrutin-blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  @keyframes scrutin-sweep {
    0%   { left: -40%; width: 38%; opacity: 1; }
    60%  { left: 100%; width: 38%; opacity: 1; }
    61%  { left: 100%; opacity: 0; }
    62%  { left: -40%; opacity: 0; }
    63%  { left: -40%; opacity: 1; }
    100% { left: -40%; width: 38%; opacity: 1; }
  }

  @keyframes scrutin-ticker {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @media (max-width: 480px) {
    .scrutin-root { align-items: flex-start; padding: 3.5rem 1.5rem; }
    .scrutin-heading { font-size: 2.1rem; }
  }
`;

const WORDS = ["experience.", "precision.", "experience."];

const TICKER_ITEMS = [
  "Validation engine", "Model retraining", "Signal recalibration",
  "Index rebuild", "Cache flush", "Schema migration",
  "Inference pipeline", "Feature scoring",
];

function TickerSegment() {
  return (
    <span className="scrutin-ticker-segment">
      {TICKER_ITEMS.map((item, i) => (
        <span key={i}>
          {item}
          <span className="scrutin-dot">·</span>
        </span>
      ))}
    </span>
  );
}

export default function ScrutinMaintenance() {
  const [displayed, setDisplayed] = useState("");
  const state = useRef({ wi: 0, ci: 0, deleting: false, pause: 0 });

  useEffect(() => {
    let timer;

    function tick() {
      const s = state.current;
      const word = WORDS[s.wi];

      if (s.pause > 0) {
        s.pause--;
        timer = setTimeout(tick, 80);
        return;
      }

      if (!s.deleting) {
        s.ci++;
        setDisplayed(word.slice(0, s.ci));
        if (s.ci === word.length) { s.pause = 30; s.deleting = true; }
        timer = setTimeout(tick, 75 + Math.random() * 45);
      } else {
        s.ci--;
        setDisplayed(word.slice(0, s.ci));
        if (s.ci === 0) {
          s.deleting = false;
          s.wi = (s.wi + 1) % WORDS.length;
          s.pause = 8;
        }
        timer = setTimeout(tick, 40);
      }
    }

    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="scrutin-root">
        <main className="scrutin-container">
          <p className="scrutin-wordmark">Scrutin</p>

          <h1 className="scrutin-heading">
            Updating your<br />
            <span className="scrutin-line2">
              {displayed}
              <span className="scrutin-cursor" />
            </span>
          </h1>

          <p className="scrutin-subtext">
            We're making Scrutin sharper.<br />Back shortly.
          </p>

          <div className="scrutin-track" role="progressbar" aria-label="Maintenance in progress">
            <div className="scrutin-fill" />
          </div>

          <div className="scrutin-ticker-wrap" aria-hidden="true">
            <div className="scrutin-ticker-inner">
              <TickerSegment />
              <TickerSegment />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
