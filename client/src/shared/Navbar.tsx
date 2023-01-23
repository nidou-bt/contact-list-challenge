import React from "react";
import Icon from "components/UI/Icon";
import backArrow from "assets/icons/backArrow.png";
import lightMode from "assets/icons/lightMode.png";
import setting from "assets/icons/settings.png";
import icon from "assets/icons/icon.png";
import add from "assets/icons/add.png";

const Navbar = () => {
  return (
    <nav className="font-Glysa text-2xl flex h-[96px] justify-center items-center">
      <Icon src={backArrow} />
      <div className="container md:w-[90vw] box p-[26px] flex justify-between items-center">
        <h1 className="h1 ">Contacts</h1>
        <div className="flex items-center gap-x-[28px]">
          <Icon src={setting} />
          <Icon src={icon} />
          <button className="flex justify-between items-center gap-x-[15px] rounded-full border px-[8px] py-[16px] max-w-[120px] h-[40px] ">
            <div className="hidden md:block">
              <Icon src={add} />
            </div>
            <p className="body"> Add new</p>
          </button>
        </div>
      </div>
      <Icon src={lightMode} />
    </nav>
  );
};

export default Navbar;
