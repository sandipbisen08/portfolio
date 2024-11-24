import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import SkillItem from "./ui/SkillItem";
import skills from "@/data/skills";
import { BackgroundLines } from "../common/background-lines";

const HomeSection4 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15]"
      id={id}
    >
      <BackgroundLines>
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Skills</SectionTitle>

        <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16">
          {skills.map((skill, index) => {
            return <SkillItem key={`skill-${index}`} data={skill} />;
          })}
        </GridBox>
      </ConstrainedBox>
      </BackgroundLines>
    </ResponsiveBox>
  );
};

export default HomeSection4;
