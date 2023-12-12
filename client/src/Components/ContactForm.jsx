import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ToastCompo from "./ToastCompo";

const ContactForm = () => {
  const formData = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          formData.current.reset();
          toast(<ToastCompo>Message send successfully</ToastCompo>);
        },
        (error) => {
          console.log(error.text);
          toast(<ToastCompo success={false}>Something went wrong</ToastCompo>);
        }
      );
  };
  return (
    <form
      ref={formData}
      className="flex flex-col gap-5 justify-center items-center w-full mx-auto md:order-2"
      onSubmit={handleSubmit}
    >
      <div className="w-full grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="user_name"
          required
          className="inputDefault"
          placeholder="Your Full Name"
        />
        <input
          type="email"
          name="user_email"
          required
          className="inputDefault"
          placeholder="Your Email"
        />
      </div>
      <textarea
        name="message"
        required
        className="inputDefault resize-y min-h-[150px]"
        placeholder="Your message...."
      ></textarea>
      <button
        className="bg-secondaryColor text-whiteColor py-2 px-4 rounded-md min-w-[200px]"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
