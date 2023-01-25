import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import FormInput from "./FormInput";

export default function Modal({ children }: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        {children}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody divider>
          <FormInput id='name' name='name' type='text' placeholder="name">Name</FormInput>
          <FormInput id='phoneNumber' name='phoneNumber' type='number' placeholder="phone number">Phone Number</FormInput>
          <FormInput id='emailAddress' name='emailAddress' type='text' placeholder=" emailk">Email Adress</FormInput>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
