import ProjectGrid from "./ProjectGrid";
import { WorkItem } from "../lib/site-content";

type WorkProps = {
  works: WorkItem[];
};

const Work = ({ works }: WorkProps) => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
    >
      <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Featured Work
      </h2>

      <ProjectGrid works={works} />
    </section>
  );
};

export default Work;
