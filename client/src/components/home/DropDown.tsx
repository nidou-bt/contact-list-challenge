import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import setting from "../../assets/icons/settings.png";
import favourite from "../../assets/icons/favourite.png";
import Delete from "../../assets/icons/delete.png";
import Button from "../UI/Button";

function DropDown({ children, mutate }: any) {
  return (
    <Menu as="div" className="relative inline-block text-left ">
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
        
      >
        <Menu.Items className="absolute right-0 lg:left-0 top-[40px]  z-10 w-[90vw] max-w-[219px] origin-top-right rounded-lg bg-black-80 shadow-lg ring-black ring-opacity-5  focus:outline-none active:ring-offset-current">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <Button
                  src={setting}
                  active={active}
                  children="edit"
                  variant="dropdown"
                />
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Button
                  src={favourite}
                  active={active}
                  children="favorite"
                  variant="dropdown"
                />
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Button
                  src={Delete}
                  active={active}
                  children="delete"
                  variant="dropdown"
                  onClick={mutate}
                />
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDown;
