import "@/App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", position: "relative" }}>
      {/* Ambient background glow */}
      <div className="bg-glow">
        <div
          className="bg-glow-orb"
          style={{
            width: "640px",
            height: "640px",
            background: "#c8622a",
            top: "-12%",
            left: "30%",
            animationDelay: "0s",
          }}
        />
        <div
          className="bg-glow-orb"
          style={{
            width: "420px",
            height: "420px",
            background: "#7a3010",
            top: "55%",
            right: "-8%",
            animationDelay: "4.5s",
          }}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <HowItWorks />
      </div>
    </div>
  );
}

export default App;
