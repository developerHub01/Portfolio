import Image from "next/image";
import Container from "@/components/ui/container";
import SocialMenu from "@/components/home/hero/social-menu";
import TechStackText from "@/components/home/hero/tech-stack-text";

const HeroSection = () => {
  return (
    <section className="flex-1 w-full relative mx-auto flex">
      <SocialMenu />
      <Container className="w-full pt-6 pb-5 flex-1 flex flex-col">
        <div className="flex flex-col justify-center items-center pb-2">
          <p className="text-secondary text-base">HI, I am</p>
          <h3 className="uppercase text-primary font-brand text-4xl font-bold">
            Shakil
          </h3>
        </div>
        <div className="w-full flex-1 flex justify-center cursor-pointer pointer-events-none">
          <div className="w-full flex-1 relative flex justify-center items-center py-3">
            {/* <Image
              src={"/home/shakil.png"}
              alt="Abdus Shohid Shakil"
              className="z-10 relative w-60 sm:w-65 md:w-75 object-contain pointer-events-none"
              width={500}
              height={500}
              style={{
                objectFit: "contain",
              }}
            /> */}
            <TechStackText front={false} />
            <TechStackText front={true} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
