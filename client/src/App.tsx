import Home from "./pages/Home";
import Navbar from "./shared/Navbar";
import Icon from "./components/UI/Icon";
import { icons } from "./utils/icons";

function App() {
  return (
    <div className="bg-black-100 min-h-[100vh] grid grid-cols-main grid-rows-main">
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box flex justify-end pr-[3vw] sm:pr-[35px] items-center border-r-[1px] border-t-0 border-b-0 ">
        <Icon src={icons.backArrow} variant="icon" />
      </div>
      <Navbar />
      <div className="box flex justify-start pl-[3vw] sm:pl-[35px] items-center border-r-[1px] border-t-0 border-b-0">
        <Icon src={icons.lightMode} variant="icon" />
      </div>
      <div className="box" />
      <Home />
      <div className="box" />
    </div>
  );
}

export default App;
