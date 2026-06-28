import ProjectCard from "./ProjectCard";
import { WorkItem } from "../lib/site-content";

type ProjectGridProps = {
  works: WorkItem[];
};

const getProjectMetadata = (name: string) => {
  const normName = name.toLowerCase();
  if (normName.includes("hanioo")) {
    return {
      isCurrent: true,
      need: "An on-demand interpretation platform connecting clients with professional interpreters in real-time."
    };
  }
  if (normName.includes("sreesivam")) {
    return {
      isCurrent: false,
      role: "Lead UI/UX & E-commerce Designer",
      timeline: "3 Months (2024)"
    };
  }
  if (normName.includes("flubn")) {
    return {
      isCurrent: false,
      role: "Product & System Designer",
      timeline: "4 Months (2024)"
    };
  }
  if (normName.includes("adconvo")) {
    return {
      isCurrent: false,
      role: "UI/UX & Dashboard Designer",
      timeline: "2 Months (2024)"
    };
  }
  if (normName.includes("portagam")) {
    return {
      isCurrent: false,
      role: "End-to-End Product Designer",
      timeline: "3 Months (2024)"
    };
  }
  if (normName.includes("b2m")) {
    return {
      isCurrent: false,
      role: "UI/UX Designer",
      timeline: "2 Months (2023)"
    };
  }
  if (normName.includes("rajam")) {
    return {
      isCurrent: false,
      role: "Web Designer",
      timeline: "1 Month (2023)"
    };
  }
  return {
    isCurrent: false,
    role: "Product & UI/UX Designer",
    timeline: "2024"
  };
};

const ProjectGrid = ({ works }: ProjectGridProps) => {
  // const [filter, setFilter] = useState(true);
  const activeWorks = works.filter((project) => project.isActive);

  return (
    <>
      {/* <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
          Development
        </h4>{" "}
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]/30" : "text-[#e4ded7]"
          }`}
          onClick={() => setFilter(false)}
        >
          Design
        </h4>
      </div> */}

      {/* {filter ? ( */}
        <div className="grid w-[90%] grid-cols-1 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {activeWorks.map((project, index) => {
            const meta = getProjectMetadata(project.name);
            return (
              <ProjectCard
                id={index}
                key={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                figma={project.figmaUrl}
                demo={project.demoUrl}
                image={project.imageUrl}
                available={project.available}
                isCurrent={meta.isCurrent}
                need={meta.need}
                role={meta.role}
                timeline={meta.timeline}
              />
            );
          })}
        </div>
      {/* ) : (
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-6 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {designProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              bgColor={project.bgColor}
              available={project.available}
            />
          ))}
        </div>
      )} */}
    </>
  );
};

export default ProjectGrid;
