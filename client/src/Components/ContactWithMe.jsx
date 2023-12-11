import React, { useState } from "react";
import Section from "./Common/Section";
import Heading from "./Heading";
import Container from "./Common/Container";
import { contactBg } from "../Constant/constant";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactWithMe = () => {
  return (
    <Section
      className="bg-primaryColor flex flex-col relative"
      style={{
        background: `url('${contactBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgorundRepeat: "no-repeat",
      }}
    >
      <span className="absolute top-0 left-0 w-full h-full bg-black/80 z-0"></span>
      <Container className="relative z-0">
        <div className="w-full flex flex-col gap-10">
          <Heading text="Contact With Me" align="center" />
          <div className="grid md:grid-cols-2 gap-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactWithMe;
