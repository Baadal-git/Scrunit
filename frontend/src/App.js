import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import SampleReport from "./components/SampleReport";
import Pricing from "./components/Pricing";
import About from "./components/About";
import AuthModal from "./components/AuthModal";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <SampleReport />
      <Pricing />
      <About />
    </>
  );
}

function AppContent() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  // Close modal when user logs in
  useEffect(() => {
    if (user) setShowAuthModal(false);
  }, [user]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", position: "relative" }}>
      {/* Ambient background glow */}
      <div className="bg-glow">
        <div
          className="bg-glow-orb"
          style={{ width: "640px", height: "640px", background: "#c8622a", top: "-12%", left: "30%", animationDelay: "0s" }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar setShowAuthModal={setShowAuthModal} />
                <LandingPage />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard setShowAuthModal={setShowAuthModal} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
