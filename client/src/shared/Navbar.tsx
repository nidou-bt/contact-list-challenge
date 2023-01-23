import React from "react";
import backArrow from "../assets/icons/backArrow.png";
import lightMode from "../assets/icons/lightMode.png";
import setting from "../assets/icons/settings.png";
import icon from "../assets/icons/icon.png";
import Icon from "../components/UI/Icon";

const Navbar = () => {
  return (
    <nav className="font-Glysa text-2xl bg-black-50">
      <Icon src={backArrow} />
      <div className="">
        <h1 className="h1">Contacts</h1>
        <div>
          <Icon src={setting} />
          <Icon src={icon} />
          <button></button>
        </div>
        <Icon src={lightMode} />
      </div>
    </nav>
  );
};

export default Navbar;
