import React from "react";
import Container from "./Common/Container";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { authorEmail, authorPhone } from "../Constant/constant";
const ContactInfo = () => {
  return (
    <div className="w-full h-full bg-secondaryColor flex flex-col p-2 rounded-md shadow-md text-whiteColor text-center divide-y-2 divide-whiteColor/50">
      <div className="w-full h-full flex justify-center items-center gap-2 flex-col min-h-[100px] p-3">
        <MdEmail className="text-2xl md:text-4xl" />
        <p className="pb-0 text-base md:text-xl">{authorEmail}</p>
      </div>
      <div className="w-full h-full flex justify-center items-center gap-2 flex-col min-h-[100px] p-3">
        <FaPhoneAlt className="text-2xl md:text-4xl" />
        <p className="pb-0 text-base md:text-xl">{authorPhone}</p>
      </div>
      <div className="w-full h-full flex justify-center items-center gap-2 flex-col min-h-[100px] p-3">
        <FaLocationDot className="text-2xl md:text-4xl" />
        <p className="pb-0 text-base md:text-xl">
          Botteswor, Sylhet, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
