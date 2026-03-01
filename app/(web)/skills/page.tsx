import MainHeading from "@/components/headings/MainHeading";
import SetWrapper from "@/components/skills/set-wrapper";
import Container from "@/components/ui/container";
import { SKILLS } from "@/constant/skills.constant";
import SkillsSet from "@/components/skills/skills-set";

export default function Page() {
  return (
    <Container className="flex flex-col gap-5">
      <MainHeading>My skills set</MainHeading>
      <SetWrapper title="Primary">
        <SkillsSet skills={SKILLS.primary} />
      </SetWrapper>
      <SetWrapper title="Secondary">
        <SkillsSet skills={SKILLS.secondary} />
      </SetWrapper>
    </Container>
  );
}
