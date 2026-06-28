import DesignCard from "./DesignCard";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import { DesignItem } from "../lib/site-content";

type DesignsGridProps = {
  designs: DesignItem[];
};

const getDesignDescription = (name: string) => {
  const normName = name.toLowerCase();
  if (normName.includes("graphic")) {
    return "Explore 25+ branding and visual identity projects.";
  }
  if (normName.includes("product") || normName.includes("ui/ux")) {
    return "Explore UX case studies, wireframes, user research, design systems, and interactive prototypes.";
  }
  if (normName.includes("marketing") || normName.includes("visual")) {
    return "View campaign creatives, advertisements, and social media assets.";
  }
  return "";
};

const DesignsGrid = ({ designs }: DesignsGridProps) => {
  const activeDesigns = designs.filter((design) => design.isActive);

  return (
    <section
      className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16"
      id="work"
    >
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Design in Focus"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]">
          Creative precision in every pixel. <br /> blending graphic, UI/UX, and
          visual design to achieve measurable impact.
        </AnimatedBody>
      </div>
      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center place-items-stretch">
        {activeDesigns.map((review, index) => {
          return (
            <DesignCard
              key={review.id}
              name={review.name}
              description={review.description || getDesignDescription(review.name)}
              image={review.imageUrl}
              url={review.url}
              index={index}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default DesignsGrid;
