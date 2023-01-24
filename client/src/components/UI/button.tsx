import { ButtonHTMLAttributes, useEffect } from "react";
import Icon from "./Icon";

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  src: string;
  active: boolean;
  variant: "icon" | "profil" | "dropdown"
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Button({ src, active, variant, ...props }: IButton): JSX.Element {

  return (
    <button
      className={classNames(
        active ? "bg-black-70" : "body",
        "flex justify-start gap-[14px] p-[12px] items-center hover:bg-black-70 w-[100%] rounded"
      )}
      {...props}
    >
      {src ? <Icon src={src} /> : null}
      <p className="body capitalize">{props.children}</p>
    </button>
  );
}

export default Button;
