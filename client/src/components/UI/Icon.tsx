import React from "react";

type TProps = {
  src: string;
  variant?: "icon" | "profil" | "dropdown" | "button";
};

const Icon = ({ src, variant }: TProps) => {

  return (
    <img
      src={src}
      alt={src ?? "icon"}
      className={
        variant === "icon"
          ? "w-[20px] hover:cursor-pointer max-w-none"
          : variant === "profil"
          ? "h-[40px] hover:cursor-pointer max-w-none"
          : variant === "dropdown"
          ? "h-[20px] hover:cursor-pointer max-w-none"
          : variant === "button"
          ? "h-[13.5px] hover:cursor-pointer max-w-none"
          : "h-[16px] hover:cursor-pointer max-w-none"
      }
    />
  );
};

export default Icon;
