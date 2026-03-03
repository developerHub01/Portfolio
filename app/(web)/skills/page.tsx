import MainHeading from "@/components/headings/MainHeading";
import SetWrapper from "@/components/skills/set-wrapper";
import { SKILLS } from "@/constant/skills.constant";
import SkillsSet from "@/components/skills/skills-set";
import PageWrapper from "@/components/ui/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <MainHeading>My skills set</MainHeading>
      <div className="flex flex-col gap-10">
        <SetWrapper title="Primary">
          <SkillsSet skills={SKILLS.primary} />
        </SetWrapper>
        <SetWrapper title="Secondary">
          <SkillsSet skills={SKILLS.secondary} />
        </SetWrapper>
      </div>
    </PageWrapper>
  );
}
