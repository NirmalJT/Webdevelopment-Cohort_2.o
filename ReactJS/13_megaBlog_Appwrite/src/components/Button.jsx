import React, { forwardRef } from "react";

function Button(
  {
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "bg-black",
    className = "",
    ...props
  },
  ref
) {
  return (
    <button
      className={`px-4 py-3 rounded-xl ${type} ${bgColor} ${textColor} ${className}`}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default forwardRef(Button);
