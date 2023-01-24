import Home from "./pages/Home";
import "./App.css";
import Navbar from "./shared/Navbar";
import Icon from "./components/UI/Icon";
import backArrow from "./assets/icons/backArrow.png";
import lightMode from "./assets/icons/lightMode.png";

function App() {
  return (
    <div
      className="bg-black-100 min-h-full"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr min(768px, 85vw) 1fr",
        gridTemplateRows: "96px 96px 80vh",
        height: "min(100vh)",
      }}
    >
      <div style={{ border: "1px solid #282828" }}></div>
      <div style={{ border: "1px solid #282828" }}></div>
      <div style={{ border: "1px solid #282828" }}></div>
      <div
        style={{
          display: "flex",
          border: "1px solid #282828",
          borderTop: "none",
          borderBottom: "none",
          justifyContent:"flex-end",
          paddingRight:"35px",
          alignItems:"center"
        }}
      >
        <Icon src={backArrow} />
      </div>
      <Navbar />
      <div style={{ display: "flex", margin: "auto", marginLeft: "35px" }}>
        <Icon src={lightMode} />
      </div>
      <div style={{ border: "1px solid #282828" }}></div>
      <Home />
      <div style={{ border: "1px solid #282828" }}></div>
    </div>
  );
}

export default App;
