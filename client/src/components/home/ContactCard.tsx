import React, { useState, memo } from "react";
import { IContact } from "../../types/type";
import Icon from "../../components/UI/Icon";
import DropDown from "./DropDown";
import useDeleteApi from "../../hooks/useDeleteApi";
import { deleteContact, updateContact } from "../../api/contactApi";
import { getPathImg } from "../../utils/getPath";
import useUpdateApi from "../../hooks/useUpdateApi";
import Modal from "../UI/Modal";
import { icons } from "../../utils/icons";

const ContactCard = (contact: IContact) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const {
    mutate: deleteMutate,
    isError,
    isLoading,
  } = useDeleteApi({
    category: "contact",
    fetchApi: () => deleteContact({ id: contact.id! }),
  });
  const { mutate: updateMutate } = useUpdateApi({
    category: "contact",
    fetchApi: updateContact,
  });

  return (
    <div
      className="flex m-[15px] sm:m-[24px] justify-between items-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex gap-[16px]">
        <img
          src={
            contact.picture
              ? getPathImg(contact.picture as string)
              : icons.profile
          }
          alt="profile"
          className="border-[1px] border-[#282828] rounded-full w-[40px] h-[40px] bg-cover bg-no-repeat"
        />
        <div>
          <h3 className="h3 capitalize">{contact.name}</h3>
          <p className="message">+36 {contact.phoneNumber}</p>
        </div>
      </div>
      <div
        className={
          isHover
            ? "flex h-[20px] justify-between gap-[20px] items-center"
            : "hidden"
        }
      >
        <Modal contact={contact} mutate={updateMutate}>
          <Icon src={icons.mute} variant="icon" />
        </Modal>
        <Icon src={icons.call} variant="icon" />
        <DropDown
          deleteMutate={deleteMutate}
          updateMutate={updateMutate}
          contact={contact}
        >
          <Icon src={icons.more} variant="icon" />
        </DropDown>
      </div>
    </div>
  );
};

export default memo(ContactCard);
