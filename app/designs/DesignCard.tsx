import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { motion } from "framer-motion";

type DesignCardProps = {
  name: string;
  image: string;
  index: number;
  url: string;
};

const DesignCard = ({ name, image, index, url }: DesignCardProps) => {
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
      className="relative flex h-[473px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent sm:h-[450px] sm:items-center sm:justify-start lg:h-[393px] lg:max-w-[438px] "
    >
      <div className="mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%] rounded-lg overflow-hidden">
        <div className="h-[80%] w-full md:h-[90%]">
          <Image
            src={image}
            alt={name}
            width={1600}
            height={840}
            className="h-full w-full rounded-lg bg-contain bg-center object-cover transition-transform hover:scale-[1.05]"
          />
        </div>
      </div>

      <div className="flex">
        <div className="flex justify-between gap-1">
          <h3 className="w-[100%] p-2 pb-8 text-[18px] font-bold uppercase tracking-[-0.46056px] text-[#e4ded7]">
            {name}
          </h3>
          <Link
              href={url}
              target="_blank"
              className="rounded-full"
              aria-label="Open Design Collection"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className=" w-[16px] rounded-full bg-[#0E1016] p-3 text-[16px] text-[#fff] md:w-[20px] md:text-[20px] lg:w-[18px] lg:p-4 lg:text-[18px]"
                data-blobity
                data-blobity-radius="30"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false"
              />
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignCard;
