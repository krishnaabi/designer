import DesignCard from "./DesignCard";
import { designDetails } from "./designDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import linkedIn from "../../public/linkedin.png";
import Image from "next/image";

const DesignsGrid = () => {
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
      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 grid-rows-6 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2  sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
        {designDetails.map((review, index) => {
          return (
            <DesignCard
              key={index}
              name={review.name}
              image={review.image}
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
