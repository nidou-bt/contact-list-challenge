import Home from "pages/Home";
import "./App.css";

import Navbar from "shared/Navbar";

function App() {
  return (
    <div className="bg-black-100 min-h-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
