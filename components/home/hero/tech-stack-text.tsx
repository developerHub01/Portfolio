import { cn } from "@/lib/utils";
import OutlinedText from "@/components/home/hero/outlined-text";

interface TechStackTextProps {
  front?: boolean;
}

const TechStackText = ({ front = false }: TechStackTextProps) => {
  return (
    <div className="absolute flex flex-col justify-center gap-4 overflow-hidden pointer-events-none select-none">
      <OutlinedText
        className={cn({
          "opacity-0": front,
        })}
      >
        FRONT
      </OutlinedText>
      <OutlinedText
        className={cn(
          "text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] z-10 text-right",
          {
            "opacity-0": !front,
          },
        )}
      >
        END
      </OutlinedText>
      <OutlinedText
        className={cn(
          "text-[50px] sm:text-[100px] md:text-[150px] lg:text-[150px] z-10 pl-10",
          {
            "opacity-0": !front,
          },
        )}
      >
        DEV
      </OutlinedText>
    </div>
  );
};

export default TechStackText;
