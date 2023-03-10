import { InputHTMLAttributes, forwardRef } from "react";

type Props = {
  children: string;
} & InputHTMLAttributes<HTMLInputElement>;

const checkIfNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {

  const regex = new RegExp(/(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/);
       
  return !event.key.match(regex) && event.preventDefault();
}

const FormInput = forwardRef<HTMLInputElement, Props>(({ children, ...props },ref): JSX.Element => {

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
        className="block w-full max-w-[390px] h-[40px] px-[12px] py-[11px] font-Lexend font-normal not-italic text-[12px] leading-[18px] text-white focus:text-white focus:bg-black-60 bg-black-80 focus:bg-black focus:border-[1px] focus:border-black-10 rounded-lg border-[1px] border-black-30"
        onKeyDown={(event) => props.type==="number" ? checkIfNumber(event): event}
      />
    </div>
  );
})

export default FormInput;
