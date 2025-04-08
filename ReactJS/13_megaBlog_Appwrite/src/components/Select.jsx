import React, { forwardRef, useId } from "react";
function Select({ options, label, className = "", ...props }, ref) {
  const Id = useId();
  return (
    <>
      <div className="w-full">
        {label && <label htmlFor={Id}>{label}</label>}

        <select {...props} id={Id} ref={ref} className={`${className}`}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default forwardRef(Select);
