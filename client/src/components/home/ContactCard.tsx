import React, { useState } from "react";
import { IContact } from "../../types/type";
import Icon from "../../components/UI/Icon";
import profileS from "../../assets/icons/profileS.png";
import More from "../../assets/icons/More.png";
import Call from "../../assets/icons/call.png";
import DropDown from "./DropDown";
import useDeleteApi from "../../hooks/useDeleteApi";
import { deleteContact } from "../../api/contactApi";
import Mute from '../../assets/icons/Mute.png'
import { getPathImg } from "../../utils/getPath";

interface IProps extends IContact {}

const ContactCard = ({ name, picture, phoneNumber, id }: IProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { mutate, isError, isLoading} = useDeleteApi({ category:"contact", fetchApi:()=>deleteContact({id: id!})});

  return (
    <div
      className="flex m-[15px] sm:m-[24px] justify-between items-center"
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex gap-[16px]">
        <img
          src={picture ?getPathImg(picture as string): profileS}
          alt="profile"
          className="border-[1px] border-[#282828] rounded-full w-[40px] h-[40px] bg-cover bg-no-repeat"
        />
        <div>
          <h3 className="h3 capitalize">{name}</h3>
          <p className="message">+36 {phoneNumber}</p>
        </div>
      </div>
      <div
        className={
          true
            ? "flex h-[20px] justify-between gap-[20px] items-center"
            : "hidden"
        }
      >
        <Icon src={Mute} variant="icon" />
        <Icon src={Call} variant="icon" />
        <DropDown mutate={mutate}>
          <Icon src={More} variant="icon" />
        </DropDown>
      </div>
    </div>
  );
};

export default ContactCard;
