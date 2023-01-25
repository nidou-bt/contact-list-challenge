import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import FormInput from "./FormInput";

export default function Modal({ children }: any) {
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
        className="bg-[#000000]/40 h-[100vh]"
      >
        <DialogBody
          divider
          className="bg-black-100 w-[85vw] max-w-[364px] min-h-[540px] rounded-lg m-auto relative"
        >
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
          <div className="flex justify-end gap-[24px] absolute m-[24px] right-[0px] bottom-[0px] items-center font-Lexend font-normal not-italic text-[14px] leading-[18px]">
            <button className="capitalize text-white" onClick={handleOpen}>
              Cancel
            </button>
            <button
              className="capitalize h-[40px] bg-[#262626] rounded-lg px-[16px] py-[8px] font-Lexend font-normal not-italic text-[14px] leading-[18px] text-white hover:bg-black-50"
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
