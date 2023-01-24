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
          ? "w-[20px] hover:cursor-pointer"
          : variant === "profil"
          ? "h-[40px] hover:cursor-pointer"
          : variant === "dropdown"
          ? "h-[20px] hover:cursor-pointer"
          : "h-[16px] hover:cursor-pointer"
      }
    />
  );
};

export default Icon;
