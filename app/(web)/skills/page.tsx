import MainHeading from "@/components/headings/MainHeading";
import SetWrapper from "@/components/skills/set-wrapper";
import { SKILLS } from "@/constant/skills.constant";
import SkillsSet from "@/components/skills/skills-set";
import Container from "@/components/ui/container";

export default function Page() {
  return (
    <div className="w-full h-full p-5 lg:p-10">
      <Container className="flex flex-col gap-12 pb-16">
        <MainHeading>My skills set</MainHeading>
        <div className="flex flex-col gap-10">
          <SetWrapper title="Primary">
            <SkillsSet skills={SKILLS.primary} />
          </SetWrapper>

          <SetWrapper title="Secondary">
            <SkillsSet skills={SKILLS.secondary} />
          </SetWrapper>
        </div>
      </Container>
    </div>
  );
}
