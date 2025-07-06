import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export const Button = ({
  title,
  size = "md",
  style,
  className,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    sm: "px-3 py-1.5",
    md: "px-5 py-2",
    lg: "px-5 py-2",
  };

  return (
    <button
      className={clsx(
        "rounded-lg text-white cursor-pointer transition-colors duration-200 hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none",
        sizeClasses[size],
        className
      )}
      style={style}
      {...props}
    >
      {title}
    </button>
  );
};
