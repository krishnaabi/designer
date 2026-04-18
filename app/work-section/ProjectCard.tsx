import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

type ProjectCardProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  figma: string;
  demo: string;
  image: string;
  available: boolean;
};

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  figma,
  demo,
  image,
  available,
}: ProjectCardProps) => {
  const isEven = id % 2 === 0;

  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="relative z-10 w-full overflow-hidden rounded-3xl"
      initial="initial"
      animate="animate"
    >
      <div className="grid grid-cols-1 lg:min-h-[500px] lg:grid-cols-2">
        <div
          className={`relative order-1 min-h-[240px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[500px] ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>

        <div
          className={`order-2 flex flex-col gap-5 p-5 sm:p-8 lg:justify-between lg:p-10 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex items-center justify-end gap-3 sm:gap-4">
            {available ? (
              <>
                <Link href={figma} target="_blank" className="rounded-full" aria-label="Open Figma">
                  <FontAwesomeIcon
                    icon={faFigma}
                    className="w-[20px] rounded-full text-black bg-white p-4 text-[20px] sm:p-5 md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
                {demo !== "" && (
                  <Link href={demo} target="_blank" aria-label="Open Live Demo">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="w-[20px] rounded-full text-black bg-white p-4 text-[20px] sm:p-5 md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                      data-blobity
                      data-blobity-radius="38"
                      data-blobity-offset-x="4"
                      data-blobity-offset-y="4"
                      data-blobity-magnetic="true"
                    />
                  </Link>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <Link href={figma} target="_blank" className="mt-1 rounded-full" aria-label="Open Figma">
                  <FontAwesomeIcon
                    icon={faFigma}
                    className="w-[20px] rounded-full text-black bg-white p-4 text-[20px] sm:p-5 md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
                <div className="rounded-xl bg-white px-3 py-2 sm:px-4 md:px-5 md:py-3 lg:px-6 lg:py-4">
                  <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">Coming soon</h3>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col justify-center text-white">
            <AnimatedTitle
              text={name}
              className="max-w-[95%] text-[30px] leading-none text-white sm:text-[34px] md:text-[40px] lg:max-w-[440px] lg:text-[48px]"
              wordSpace={"mr-[0.25em]"}
              charSpace={"-mr-[0.01em]"}
            />
            <AnimatedBody
              text={description}
              className="mt-3 w-[95%] max-w-[460px] text-[14px] font-semibold text-[#95979D] sm:mt-4 sm:text-[16px]"
            />
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 lg:mt-8 lg:gap-4">
              {technologies.map((tech, techIndex) => (
                <AnimatedTitle
                  text={tech}
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"mr-[0.01em]"}
                  key={techIndex}
                  className="text-[12px] font-bold uppercase sm:text-[14px] md:text-[16px] lg:text-[18px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
