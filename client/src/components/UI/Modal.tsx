import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import FormInput from "./FormInput";
import profile from "../../assets/icons/profileS.png";
import Delete from "../../assets/icons/delete.png";
import { IContact } from "../../types/type";
import Icon from "./Icon";

type TProps = {
  children: any;
  variant?: "add" | "edit";
  contact?: IContact;
};

export default function Modal({ children, variant, contact }: TProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        {children}
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-[#000000]/40 h-[100vh] w-[100vw] flex m-auto"
      >
        <DialogBody
          divider
          className="bg-black-100 w-[85vw] max-w-[364px] min-h-[540px] rounded-lg m-auto relative p-[24px]"
        >
          <h2 className="h2">Add contact</h2>
          <div className="flex justify-start gap-[16px] items-center">
            <img src={profile} className="w-[88px]" alt="profile" />
            <div>
              {false ? (
                <button className="bg-black-50 button" >+ Add picture</button>
              ) : (
                <div className="flex gap-[8px]"
                >
                  <button className="bg-black-50 button w-[164px] ">change picture</button>
                  <button className="bg-black-50 button w-[40px] flex items-center justify-center">
                    {/* <Icon src={Delete} variant="icon"/> */}
                    <img src={Delete} alt="delete" className="" />
                    </button>
                </div>
              )}
            </div>
          </div>
          <FormInput id="name" name="name" type="text" placeholder="name">
            Name
          </FormInput>
          <FormInput
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="phone number"
          >
            Phone Number
          </FormInput>
          <FormInput
            id="emailAddress"
            name="emailAddress"
            type="text"
            placeholder=" emailk"
          >
            Email Adress
          </FormInput>
          <div className="flex justify-end gap-[24px] absolute m-[24px] right-[0px] bottom-[0px] items-center  ">
            <button className="capitalize button" onClick={handleOpen}>
              Cancel
            </button>
            <button
              className="capitalize h-[40px] bg-[#262626] rounded-lg px-[16px] py-[8px] button hover:bg-black-50"
              onClick={handleOpen}
            >
              Done
            </button>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
