import Home from "./pages/Home";
import "./App.css";
import Navbar from "./shared/Navbar";
import Icon from "./components/UI/Icon";
import backArrow from "./assets/icons/backArrow.png";
import lightMode from "./assets/icons/lightMode.png";

function App() {
  return (
    <div
      className="bg-black-100 min-h-[100vh] grid grid-cols-main grid-rows-main"
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
          alignItems:"center",
          
        }}
      >
        <Icon src={backArrow} variant="icon" />
      </div>
      <Navbar />
      <div style={{
          display: "flex",
          border: "1px solid #282828",
          borderTop: "none",
          borderBottom: "none",
          justifyContent:"flex-start",
          paddingLeft:"35px",
          alignItems:"center"
        }}>
        <Icon src={lightMode} variant="icon" />
      </div>
      <div style={{ border: "1px solid #282828" }}></div>
      <Home />
      <div style={{ border: "1px solid #282828" }}></div>
    </div>
  );
}

export default App;
