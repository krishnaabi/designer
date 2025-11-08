import { reviewProps } from "./reviewDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import profile from "../../public/samuel.avif";
import slash from "../../public/review-slash.svg";
import { motion } from "framer-motion";

const BlogCard = ({ name, testimonial, index }: reviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-[473px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:h-[450px] sm:items-center sm:justify-start lg:h-[393px] lg:max-w-[438px] "
    >
      <div className="w-[100%]">
        <Image src={slash} alt={"title"} className="w-[51px]" />
      </div>

      <div className="flex">
        <div className="flex flex-col gap-1">
          <h3 className="w-[100%] p-2 text-[18px] font-bold uppercase tracking-[-0.46056px] text-[#e4ded7]">
            {name}
          </h3>
        </div>
      </div>

      <p className="mt-2 gap-4 text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7]">{testimonial}</p>
    </motion.div>
  );
};

export default BlogCard;
