import Home from "pages/Home";
import Navbar from "shared/Navbar";
import Icon from "components/UI/Icon";
import { icons } from "utils/icons";

const className = "box flex items-center border-r-[1px] border-t-0 border-b-0"

function App() {
  return (
    <div className="bg-black-100 min-h-[100vh] grid grid-cols-main grid-rows-main">
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className={`pr-[3vw] sm:pr-[35px] justify-end ${className}`}>
        <Icon src={icons.backArrow} variant="icon" />
      </div>
      <Navbar />
      <div className={`pl-[3vw] sm:pl-[35px] justify-start ${className}`}>
        <Icon src={icons.lightMode} variant="icon" />
      </div>
      <div className="box" />
      <Home />
      <div className="box" />
    </div>
  );
}

export default App;
