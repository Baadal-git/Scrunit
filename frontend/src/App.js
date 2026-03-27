import "@/App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <Navbar />
    </div>
  );
}

export default App;
