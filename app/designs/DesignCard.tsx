import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { motion } from "framer-motion";

type DesignCardProps = {
  name: string;
  description?: string;
  image: string;
  index: number;
  url: string;
};

const DesignCard = ({ name, description, image, index, url }: DesignCardProps) => {
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
      className="relative flex min-h-[460px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-[#161922]/30 p-6 transition-all duration-300 hover:border-[#e4ded7]/30 sm:min-h-[440px] lg:min-h-[420px] lg:max-w-[438px]"
    >
      <div className="w-full h-[180px] rounded-lg overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          width={1600}
          height={840}
          className="h-full w-full rounded-lg bg-contain bg-center object-cover transition-transform hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4 w-full">
        <h3 className="text-[22px] font-bold uppercase tracking-wide text-[#e4ded7]">
          {name}
        </h3>
        <p className="text-[15px] leading-relaxed text-[#e4ded7]/70">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-[#e4ded7]/10 w-full flex items-center justify-between">
        <Link
          href={url}
          target="_blank"
          className="group flex items-center gap-2 text-[16px] font-bold uppercase tracking-wider text-[#e4ded7] transition-all hover:text-[#fff]"
          aria-label="Open Design Collection"
        >
          <span>→ Explore</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default DesignCard;
