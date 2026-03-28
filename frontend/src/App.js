import "@/App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import SampleReport from "./components/SampleReport";
import Pricing from "./components/Pricing";

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
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <SampleReport />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
