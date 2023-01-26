import React from "react";
import Icon from "../components/UI/Icon";
import Modal from "../components/UI/Modal";
import useAddApi from "../hooks/useAddApi";
import { addContact } from "../api/contactApi";
import { icons } from "../utils/icons";

const Navbar = () => {
  const { mutate, isError, isLoading } = useAddApi({
    fetchApi: addContact,
    category: "contact",
  });

  return (
    <nav className="font-Glysa text-2xl flex h-[96px] justify-center items-center w-full">
      <div className="border-x-[1px] border-black-60 p-[26px] w-full flex justify-between items-center">
        <h1 className="h1 ">Contacts</h1>
        <div className="flex items-center gap-x-[2vw] sm:gap-x-[28px]">
          <Icon src={icons.settings} variant="icon" />
          <Icon src={icons.icon} variant="icon" />
          <Modal mutate={mutate}>
            <button className="flex justify-between items-center gap-x-[13px] bg-black-60 rounded-lg sm:rounded-full px-[12px] py-[16px] max-w-[120px] h-[40px] border-[1px] border-black-20 hover:bg-black-50 active:bg-black-40">
              <div className="block sm:hidden md:block">
                <Icon src={icons.add} variant="button" />
              </div>
              <p className="body hidden sm:block"> Add new</p>
            </button>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
