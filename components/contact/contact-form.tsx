"use client";

import { useState } from "react";
import { PaperAirplaneIcon } from "@/components/icons";
import FrameV1 from "@/components/ui/frame-v1";
import { contactSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

interface FormInterface {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  code?: string;
  details?: {
    fieldErrors?: Record<string, Array<string>>;
    formErrors?: Array<string>;
  };
}

const ContactForm = () => {
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [isSubmitError, setIsSubmitError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<FormInterface>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (data: FormInterface) => {
    if (isSubmitting) return;

    setSubmitMessage("");
    setIsSubmitError(false);
    setIsSubmitting(true);

    const response = await fetch("/api/send-email", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as ApiResponse;
    setIsSubmitting(false);

    if (!response.ok || !result.success) {
      const firstFieldError = result.details?.fieldErrors
        ? Object.values(result.details.fieldErrors).flat()[0]
        : undefined;
      setSubmitMessage(firstFieldError ?? result.message ?? "Request failed");
      setIsSubmitError(true);
      return;
    }

    setSubmitMessage(result.message || "Message sent successfully");
    setIsSubmitError(false);
    form.reset();
  };

  return (
    <FrameV1 className="opacity-0 group-hover:opacity-100">
      <form
        className="bg-secondary p-5 sm:p-10 flex flex-col gap-6 shadow-awesome-dark border border-border/30"
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
                    aria-labelledby="contact-name"
                    className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="bg-accent/40 border border-border/40 px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all duration-300 shadow-awesome-light h-auto"
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
                    aria-labelledby="contact-email"
                    className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-accent/40 border border-border/40 px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all duration-300 shadow-awesome-light h-auto"
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
                  aria-labelledby="contact-message"
                  className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or say hello..."
                  className="bg-accent/40 border border-border/40 px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all duration-300 shadow-awesome-light resize-none"
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
          disabled={isSubmitting}
          className={cn(
            "self-start inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-primary font-bold text-base hover:bg-primary/90 transition-all duration-300 cursor-pointer shadow-awesome-light group/send",
            {
              "opacity-80 pointer-events-none": isSubmitting,
            },
          )}
        >
          {isSubmitting && <Spinner />}
          <span>Send Message</span>
          <PaperAirplaneIcon
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
        {Boolean(submitMessage) && (
          <p
            className={
              isSubmitError ? "text-red-500 text-sm" : "text-green-500 text-sm"
            }
          >
            {submitMessage}
          </p>
        )}
      </form>
    </FrameV1>
  );
};

export default ContactForm;
