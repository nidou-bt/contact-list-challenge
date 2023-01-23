import React from "react";

type TProps = {
  src: string;
  variant?: "icon";
};

const Icon = ({ src, variant }: TProps) => {
  return (
    <img
      src={src}
      alt={src ?? ""}
      className={variant === "icon" ? "h-5" : "h-6"}
    />
  );
};

export default Icon;
