import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "bg-black",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-3 rounded-xl ${type} ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
