import { ButtonHTMLAttributes, forwardRef} from "react";
import Icon from "./Icon";

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  src: string;
  active?: boolean;
  variant: "icon" | "profil" | "dropdown";
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Button = forwardRef<HTMLButtonElement, TButton>(({ src, active, variant, ...props }, ref): JSX.Element => {
  return (
    <button
      className={classNames(
        active ? "bg-black-70" : "body",
        "flex justify-start gap-[14px] p-[12px] items-center hover:bg-black-70 w-[100%] rounded"
      )}
      {...props}
      ref={ref}
    >
      <div className="w-[20px] flex items-center justify-center">
        {src ? <Icon src={src} variant="dropdown" /> : null}
      </div>

      <p className="body capitalize">{props.children}</p>
    </button>
  );
})

export default Button;
