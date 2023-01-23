import React from "react";

type TProps = {
  src: string;
  variant?: "icon" | "profil";
};

const Icon = ({ src, variant }: TProps) => {
  console.log('src', src)
  return (
    <img
      src={src}
      alt={src ?? ""}
      className={variant === "icon" ? "w-[20px]": variant === "profil" ? "h-[40px]" : "h-[16px]"}
    />
  );
};

export default Icon;
