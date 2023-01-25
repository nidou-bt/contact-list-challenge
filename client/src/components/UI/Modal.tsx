import { Fragment, useState, useRef } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import FormInput from "./FormInput";
import profile from "../../assets/icons/profileS.png";
import Delete from "../../assets/icons/delete.png";
import change from "../../assets/icons/change.png";
import add from "../../assets/icons/add.png";
import { IContact } from "../../types/type";
import Icon from "./Icon";
import { ChangeEvent } from "react";
import Button from "./Button";
import useAddApi from "../../hooks/useAddApi";
import { addContact } from "../../api/contactApi";

type TProps = {
  children: any;
  variant?: "add" | "edit";
  contact?: IContact;
};

export default function Modal({ children, variant, contact }: TProps) {
  const [open, setOpen] = useState(false);
  const hiddenInput = useRef(null);
  const [file, setFile] = useState<File>();
  const [newContact, setNewContact] = useState<IContact>({
    emailAddress: "",
    name: "",
    phoneNumber: 0,
    picture: "",
  });

  const { mutate, isError, isLoading } = useAddApi({
    fetchApi: () => addContact({ ...newContact, picture: file }),
    category: "contact",
  });

  const handleOpen = () => setOpen(!open);

  const handelChange = (e: any) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleDone = () => {
    setOpen(false);
    console.log("contact", newContact);
    // mutate():
  };

  return (
    <Fragment>
      <a onClick={handleOpen}>{children}</a>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-[#000000]/40 h-[100vh] w-[100vw] flex m-auto"
      >
        <DialogBody
          divider
          className=" flex flex-col gap-[24px] bg-black-100 w-[85vw] max-w-[364px] min-h-[540px] rounded-lg m-auto relative p-[24px]"
        >
          <h2 className="h2">Add contact</h2>
          <div className="flex justify-start gap-[16px] items-center">
            <img src={profile} className="w-[88px]" alt="profile" />
            <div>
              {false ? (
                <Button
                  className="bg-black-50 button flex items-center gap-[12px] px-[16px] py-[8px] max-w-[164px] justify-between"
                  src={add}
                  variant="icon"
                >
                  Add picture
                </Button>
              ) : (
                <div className="flex gap-[8px]">
                  <Button
                    className="bg-black-50 button flex items-center gap-[12px] px-[12px] py-[8px] max-w-[164px] justify-between"
                    src={change}
                    variant="icon"
                  >
                    change picture
                  </Button>
                  <button className="bg-black-50 button w-[40px] flex items-center justify-center">
                    <Icon src={Delete} />
                    {/* <img src={Delete} alt="delete" className="" /> */}
                    <input
                      ref={hiddenInput}
                      style={{ display: "none" }}
                      type="file"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (!!e.target.files) {
                          return setFile(e.target.files[0]);
                        }
                      }}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
          <FormInput
            id="name"
            name="name"
            type="text"
            placeholder="name"
            onChange={handelChange}
          >
            Name
          </FormInput>
          <FormInput
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="phone number"
            onChange={handelChange}
          >
            Phone Number
          </FormInput>
          <FormInput
            id="emailAddress"
            name="emailAddress"
            type="text"
            placeholder=" emailk"
            onChange={handelChange}
          >
            Email Adress
          </FormInput>
          <div className="flex justify-end gap-[24px] absolute m-[24px] right-[0px] bottom-[0px] items-center  ">
            <button className="capitalize button" onClick={handleOpen}>
              Cancel
            </button>
            <button
              className="capitalize h-[40px] bg-[#262626] rounded-lg px-[16px] py-[8px] button hover:bg-black-50"
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
