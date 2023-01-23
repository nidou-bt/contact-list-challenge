import { ButtonHTMLAttributes } from "react";

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & { src: string };

function Button({ src, ...props }: IButton): JSX.Element {
  return (
    <button {...props} className="">
      {src ? <img src={src} alt={src} />: null}
      <p className="body">{props.children}</p>
    </button>
  );
}

export default Button;
