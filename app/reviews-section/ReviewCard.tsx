import { reviewProps } from "./reviewDetails";
import { motion } from "framer-motion";

const ReviewCard = ({ number, label, testimonial, index }: reviewProps) => {
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
      className="relative flex min-h-[320px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-[#161922]/30 p-[28px] transition-all duration-300 hover:border-[#e4ded7]/30"
    >
      <div className="flex flex-col items-start w-full">
        <span className="text-[56px] font-extrabold text-[#e4ded7] leading-none mb-1 select-none">
          {number}
        </span>
        <h3 className="text-[16px] font-bold uppercase tracking-wider text-[#e4ded7]/70">
          {label}
        </h3>
      </div>
      <p className="mt-6 text-[15px] sm:text-[16px] font-[500] leading-relaxed tracking-wide text-[#e4ded7]/80">
        {testimonial}
      </p>
    </motion.div>
  );
};

export default ReviewCard;
