import Home from "./pages/Home";
import "./App.css";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div
      className="bg-black-100 min-h-full"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr min(768px, 80vw) 1fr",
        gridTemplateRows: "96px 96px 80vh",
        height: "min(100vh)",
      }}
    >
      <div style={{ border: "1px solid #282828" }}></div>
      <div style={{ border: "1px solid #282828" }}></div>
      <div style={{ border: "1px solid #282828" }}></div>
      <div style={{ border: "1px solid #282828" }}></div>

      <div
        style={{ gridColumn: "2", gridRow: "2", border: "1px solid #282828" }}
      >
        <Navbar />
      </div>
      <div style={{ border: "1px solid #282828" }}></div>
      <div style={{ border: "1px solid #282828" }}></div>

      <Home />
      <div style={{ border: "1px solid #282828" }}></div>
    </div>
  );
}

export default App;
