import React, { forwardRef, useId } from "react";
const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const Id = useId();
  return (
    <>
      <div>
        {label && <label htmlFor={Id}>{label}</label>}
        <input
          type={type}
          className={`bg-black ${className}`}
          ref={ref}
          {...props}
          id={Id}
        />
      </div>
    </>
  );
});
export default Input;
