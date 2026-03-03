"use client";

import { PaperAirplaneIcon } from "@/components/icons";
import FrameV1 from "@/components/ui/frame-v1";
import { contactSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError } from "@/components/ui/field";

interface FormInterface {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const form = useForm<FormInterface>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (data: FormInterface) => {
    console.log("submitted...");
    console.log(data);
  };

  return (
    <FrameV1 className="opacity-0 group-hover:opacity-100">
      <form
        className="bg-secondary/30 p-8 sm:p-10 flex flex-col gap-6 shadow-awesome1 border border-border/30"
        // onSubmit={e => {
        //   e.preventDefault();
        //   const form = e.currentTarget;
        //   const name = (form.elements.namedItem("name") as HTMLInputElement)
        //     ?.value;
        //   const email = (form.elements.namedItem("email") as HTMLInputElement)
        //     ?.value;
        //   const message = (
        //     form.elements.namedItem("message") as HTMLTextAreaElement
        //   )?.value;
        //   const mailtoLink = `mailto:shakil102043@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        //   window.open(mailtoLink, "_self");
        // }}

        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="bg-accent/40 border border-border/40 px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all duration-300 shadow-awesome1 h-auto"
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-accent/40 border border-border/40 px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all duration-300 shadow-awesome1 h-auto"
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <label
                  htmlFor="contact-message"
                  className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or say hello..."
                  className="bg-accent/40 border border-border/40 px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all duration-300 shadow-awesome1 resize-none"
                  {...field}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <button
          type="submit"
          className="self-start inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-primary font-bold text-base hover:bg-primary/90 transition-all duration-300 cursor-pointer shadow-awesome1 group/send"
        >
          <span>Send Message</span>
          <PaperAirplaneIcon
            size={20}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </form>
    </FrameV1>
  );
};

export default ContactForm;
