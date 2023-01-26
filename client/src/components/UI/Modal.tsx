import { Fragment, useState, useRef, ChangeEvent, useEffect, Dispatch, forwardRef } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { Dialog, DialogBody } from "@material-tailwind/react";
import FormInput from "./FormInput";
import { IContact } from "../../types/type";
import Icon from "./Icon";
import Button from "./Button";
import { getPathImg } from "../../utils/getPath";
import { icons } from "../../utils/icons";

type TProps = {
  children: any;
  variant?: "add" | "edit";
  contact?: IContact;
  mutate?: UseMutateFunction<
    IContact | undefined,
    void,
    IContact & {
      picture: File;
    },
    unknown
  >;

};

const Modal = forwardRef<HTMLInputElement, TProps>(({ children, contact, mutate }, ref) => {
  const [open, setOpen] = useState(false);
  const hiddenInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [newContact, setNewContact] = useState<IContact>(
    contact || {
      emailAddress: "",
      name: "",
      phoneNumber: "",
      picture: "",
    }
  );

  const handleOpen = () => setOpen(!open);
  const handleClick = () => {
    hiddenInput.current!.click();
  };

  const handelChange = (e: any) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value.toString(),
    });
  };

  const handleDone = () => {
    setOpen(false);
    mutate!({ ...newContact, picture: file!, id: contact?.id });
  };

  const handleDelete = () => {
    setNewContact({ ...newContact, picture: "" });
    setFile(undefined);
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
          <h2 className="h2">{!contact ? "Add contact" : "Edit contact"}</h2>
          <div className="flex justify-start gap-[16px] items-center">
            <img
              src={
                !!file
                  ? URL.createObjectURL(file)
                  : newContact?.picture
                  ? getPathImg(newContact.picture as string)
                  : icons.profile
              }
              className="w-[88px] h-[88px] rounded-full"
              alt="profile"
            />
            <div>
              {!file && !newContact?.picture ? (
                <Button
                  className="bg-black-50 button flex items-center gap-[12px] px-[16px] py-[8px] max-w-[164px] justify-between"
                  src={icons.add}
                  variant="icon"
                  onClick={handleClick}
                >
                  Add picture
                </Button>
              ) : (
                <div className="flex gap-[8px]">
                  <Button
                    className="bg-black-50 button flex items-center gap-[12px] px-[12px] py-[8px] max-w-[164px] justify-between"
                    src={icons.change}
                    variant="icon"
                    onClick={handleClick}
                  >
                    change picture
                  </Button>
                  <button
                    className="bg-black-50 button w-[40px] flex items-center justify-center"
                    onClick={handleDelete}
                  >
                    <Icon src={icons.Delete} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <FormInput
            id="name"
            name="name"
            type="text"
            placeholder={contact?.name ?? "Jamie Wright"}
            onChange={handelChange}
            value={newContact.name}
            ref={ref}
          >
            Name
          </FormInput>
          <FormInput
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder={contact?.phoneNumber.toString() ?? "+01 234 5678"}
            onChange={handelChange}
            value={newContact.phoneNumber}
          >
            Phone Number
          </FormInput>
          <FormInput
            id="emailAddress"
            name="emailAddress"
            type="text"
            placeholder={contact?.emailAddress ?? "jamie.wright@mail.com"}
            onChange={handelChange}
            value={newContact.emailAddress}
          >
            Email Adress
          </FormInput>
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
});

export default Modal;
