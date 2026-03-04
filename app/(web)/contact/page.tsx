import MainHeading from "@/components/headings/MainHeading";
import SecondaryHeading from "@/components/headings/SecondaryHeading";
import FrameV1 from "@/components/ui/frame-v1";
import ContactForm from "@/components/contact/contact-form";
import { CONTACT_METHODS } from "@/constant/contact.constant";
import Link from "next/link";
import PageWrapper from "@/components/ui/page-wrapper";

const Page = () => {
  return (
    <PageWrapper>
      <MainHeading>Contact</MainHeading>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        Open to new projects and collaborations. Pick a channel.
      </p>
      {/* Contact methods */}
      <div className="flex flex-col gap-6">
        <SecondaryHeading>Reach Me</SecondaryHeading>
        <div className="group/container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONTACT_METHODS.map(method => (
            <Link
              key={method.id}
              href={method.href}
              target={method.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group/card"
            >
              <FrameV1 className="opacity-0 group-hover/card:opacity-100">
                <div className="bg-secondary p-5 sm:p-8 flex items-center gap-5 shadow-awesome-light hover:bg-accent transition-all duration-300 h-full md:group-has-[:hover]/container:not-hover:blur-xs hover:blur-none border border-border/30">
                  <div className="p-4 bg-accent text-primary shrink-0 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors duration-300 shadow-awesome-light">
                    <method.Icon size={24} />
                  </div>
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      {method.label}
                    </span>
                    <span className="text-sm sm:text-base font-primary font-semibold text-foreground truncate">
                      {method.value}
                    </span>
                  </div>
                </div>
              </FrameV1>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col gap-6">
        <SecondaryHeading>Send a Message</SecondaryHeading>
        <ContactForm />
      </div>
    </PageWrapper>
  );
};

export default Page;
