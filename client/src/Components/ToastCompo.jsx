import React from "react";
import { MdError } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";

const ToastCompo = ({ success = true, children }) => {
  return (
    <div
      className={`broder-2 ${
        success ? "border-green-800" : "border-red-800"
      } flex justify-center items-center gap-2`}
    >
      <span
        className={`text-xl ${success ? "text-green-800" : "text-red-800"}`}
      >
        {success ? <BsCheck2Circle /> : <MdError />}
      </span>
      <p className={`pb-0 ${success ? "text-green-800" : "text-red-800"}`}>
        {children}
      </p>
    </div>
  );
};

export default ToastCompo;
