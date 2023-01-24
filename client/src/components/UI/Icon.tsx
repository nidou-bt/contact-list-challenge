import React from "react";

type TProps = {
  src: string;
  variant?: "icon" | "profil" | "dropdown";
};

const Icon = ({ src, variant }: TProps) => {

  return (
    <img
      src={src}
      alt={src ?? "icon"}
      className={
        variant === "icon"
          ? "w-[20px]"
          : variant === "profil"
          ? "h-[40px]"
          : variant === "dropdown"
          ? "h-[20px] text-black-50"
          : "h-[16px]"
      }
    />
  );
};

export default Icon;
