import React, { useState, ChangeEvent } from "react";
import Icon from "../components/UI/Icon";
import setting from "../assets/icons/settings.png";
import icon from "../assets/icons/icon.png";
import add from "../assets/icons/add.png";
import Modal from "../components/UI/Modal";
import { IContact } from "../types/type";
import useAddApi from "../hooks/useAddApi";
import { addContact } from "../api/contactApi";

const Navbar = () => {
  const [file, setFile] = useState<File>();
  const [newContact, setNewContact] = useState<IContact>({
    emailAddress: "",
    name: "",
    phoneNumber: "",
    picture: "",
  });
  const { mutate, isError, isLoading } = useAddApi({
    fetchApi:addContact,
    category: "contact",
  });

  return (
    <nav className="font-Glysa text-2xl flex h-[96px] justify-center items-center w-full">
      <div className="border-x-[1px] border-black-60 p-[26px] w-full flex justify-between items-center">
        <h1 className="h1 ">Contacts</h1>
        <div className="flex items-center gap-x-[2vw] sm:gap-x-[28px]">
          <Icon src={setting} variant="icon" />
          <Icon src={icon} variant="icon" />
          <Modal mutate={mutate}>
            <button className="flex justify-between items-center gap-x-[13px] bg-black-60 rounded-lg sm:rounded-full px-[12px] py-[16px] max-w-[120px] h-[40px] border-[1px] border-black-20 hover:bg-black-50 active:bg-black-40">
              <div className="block sm:hidden md:block">
                <Icon src={add} variant="button" />
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
