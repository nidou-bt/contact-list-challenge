import React from "react";
import Icon from "../components/UI/Icon";

import setting from "../assets/icons/settings.png";
import icon from "../assets/icons/icon.png";
import add from "../assets/icons/add.png";

const Navbar = () => {
  return (
    <nav className="font-Glysa text-2xl flex h-[96px] justify-center items-center w-full">
      <div className="border-x-[1px] border-black-60 p-[26px] w-full flex justify-between items-center">
        <h1 className="h1 ">Contacts</h1>
        <div className="flex items-center gap-x-[2vw] sm:gap-x-[28px]">
          <Icon src={setting} variant="icon" />
          <Icon src={icon} variant="icon" />
          <button className="flex justify-between items-center gap-x-[13px] bg-black-60 rounded-lg sm:rounded-full px-[12px] py-[16px] max-w-[120px] h-[40px] hover:bg-black-50 active:bg-black-40">
            <div className="block sm:hidden md:block">
              <Icon src={add} variant="button" />
            </div>
            <p className="body hidden sm:block"> Add new</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
