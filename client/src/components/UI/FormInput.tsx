import { InputHTMLAttributes } from "react";

type Props = {
  children: string;
} & InputHTMLAttributes<HTMLInputElement>;

const checkIfNumber = (event: any) => {

  const regex = new RegExp(/(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/);
       
  return !event.key.match(regex) && event.preventDefault();
}

function FormInput({ children, ...props }: Props): JSX.Element {
  return (
    <div className="">
      <label
        htmlFor={props.name}
        className="font-Lexend font-normal not-italic text-[12px] leading-4 text-white/[.56]"
      >
        {children}
      </label>

      <input
        {...props}
        className="block w-full max-w-[390px] h-[40px] px-[12px] py-[11px] font-Lexend font-normal not-italic text-[12px] leading-[18px] text-white focus:text-white focus:bg-black-10 bg-black-60 focus:bg-black rounded-lg "
        onKeyDown={(event) => props.type==="number" ? checkIfNumber(event): event}
      />
    </div>
  );
}

export default FormInput;
