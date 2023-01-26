import React, { Fragment, forwardRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UseMutateFunction } from "@tanstack/react-query";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import { IContact } from "types/type";
import { icons } from "utils/icons";
import { useRef } from "react";

type TProps = {
  children: React.ReactNode;
  deleteMutate: UseMutateFunction<
    IContact | undefined,
    void,
    {
      id: number;
    },
    unknown
  >;
  updateMutate: UseMutateFunction<
    IContact | undefined,
    void,
    IContact & {
      picture: File;
    },
    unknown
  >;
  contact: IContact;
};

const DropDown = forwardRef<HTMLInputElement, TProps>(
  ({ children, deleteMutate, updateMutate, contact }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <Menu as="div" className="relative inline-block text-left ">
        {({ open, close }) => (
          <div>
            <div>
              <Menu.Button className=" flex justify-center items-center focus:ring-offset-gray-100 w-[40px] h-[40px] hover:bg-black-80 rounded-lg">
                {children}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              show={open}
            >
              <Menu.Items
                className="absolute right-0 lg:left-0 top-[40px] border-t-4 border-black-100 z-10 w-[90vw] max-w-[219px] origin-top-right rounded-lg bg-black-80 shadow-lg ring-black ring-opacity-5  focus:outline-none active:ring-offset-current"
                onMouseLeave={close}
              >
                <Menu.Item>
                  <Button
                    src={icons.settings}
                    active={false}
                    children="edit"
                    variant="dropdown"
                    onClick={() => buttonRef!.current!.click()}
                  />
                </Menu.Item>
                <Menu.Item>
                  <Button
                    src={icons.favourite}
                    children="favorite"
                    variant="dropdown"
                  />
                </Menu.Item>
                <Menu.Item>
                  <Button
                    src={icons.Delete}
                    children="delete"
                    variant="dropdown"
                    onClick={() => deleteMutate({ id: contact.id! })}
                  />
                </Menu.Item>
              </Menu.Items>
            </Transition>
            <div className="hidden">
              <Modal contact={contact} mutate={updateMutate} ref={ref}>
                <button ref={buttonRef}>open</button>
              </Modal>
            </div>
          </div>
        )}
      </Menu>
    );
  }
);

export default DropDown;
