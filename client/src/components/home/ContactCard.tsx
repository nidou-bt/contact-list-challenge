import React, { useState } from "react";
import { IContact } from "../../types/type";
import Icon from '../../components/UI/Icon'
import profileS from "assets/icons/profileS.png";
import More from "assets/icons/More.png";
import Mute from "assets/icons/Mute.png";
import Call from "assets/icons/call.png";

interface IProps extends IContact {}

const ContactCard = ({ name, picture, phoneNumber }: IProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="flex m-[24px] justify-between items-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex gap-[16px]">
        <img
          src={profileS}
          alt="profile"
          className="border-[1px] border-[#282828] rounded-full w-[40px]"
        />
        <div>
          <h3 className="h3 capitalize">{name}</h3>
          <p className="message">+36 {phoneNumber}</p>
        </div>
      </div>
      <div className={true ? "flex h-[20px] justify-between gap-[20px] items-center" : "hidden"}>
        <Icon src={Mute} variant="icon" />
        <Icon src={Call} variant="icon" />
        <Icon src={More} variant="icon" />
      </div>
    </div>
  );
};

export default ContactCard;
