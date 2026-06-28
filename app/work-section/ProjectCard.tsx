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
  isCurrent?: boolean;
  need?: string;
  role?: string;
  timeline?: string;
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
  isCurrent = false,
  need,
  role,
  timeline,
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
            {isCurrent && (
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#e4ded7]/50 mb-1 select-none">
                Current
              </span>
            )}
            
            <AnimatedTitle
              text={name}
              className="max-w-[95%] text-[30px] leading-none text-white sm:text-[34px] md:text-[40px] lg:max-w-[440px] lg:text-[48px]"
              wordSpace={"mr-[0.25em]"}
              charSpace={"-mr-[0.01em]"}
            />

            <div className="mt-6 flex flex-col gap-4 text-[14px] sm:text-[16px] text-left">
              {isCurrent ? (
                <>
                  <div>
                    <span className="text-[#e4ded7]/60 font-semibold uppercase text-[11px] block tracking-wider mb-1 select-none">
                      Description
                    </span>
                    <p className="text-[#c4c6cd] font-medium leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <div>
                    <span className="text-[#e4ded7]/60 font-semibold uppercase text-[11px] block tracking-wider mb-1 select-none">
                      Tools
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {technologies.map((tech, idx) => (
                        <span key={idx} className="text-[#e4ded7] font-semibold text-[13px] bg-white/5 border border-[#e4ded7]/10 rounded-full px-3 py-1 hover:bg-white/10 hover:border-[#e4ded7]/30 transition-all select-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {need && (
                    <div>
                      <span className="text-[#e4ded7]/60 font-semibold uppercase text-[11px] block tracking-wider mb-1 select-none">
                        Need
                      </span>
                      <p className="text-[#c4c6cd] font-medium leading-relaxed">
                        {need}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    {role && (
                      <div>
                        <span className="text-[#e4ded7]/60 font-semibold uppercase text-[11px] block tracking-wider mb-1 select-none">
                          Role
                        </span>
                        <p className="text-[#c4c6cd] font-medium leading-relaxed">
                          {role}
                        </p>
                      </div>
                    )}
                    {timeline && (
                      <div>
                        <span className="text-[#e4ded7]/60 font-semibold uppercase text-[11px] block tracking-wider mb-1 select-none">
                          Timeline
                        </span>
                        <p className="text-[#c4c6cd] font-medium leading-relaxed">
                          {timeline}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="text-[#e4ded7]/60 font-semibold uppercase text-[11px] block tracking-wider mb-1 select-none">
                      Description
                    </span>
                    <p className="text-[#c4c6cd] font-medium leading-relaxed">
                      {description}
                    </p>
                  </div>
                  {technologies.length > 0 && (
                    <div>
                      <span className="text-[#e4ded7]/60 font-semibold uppercase text-[11px] block tracking-wider mb-1 select-none">
                        Tools
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {technologies.map((tech, idx) => (
                          <span key={idx} className="text-[#e4ded7] font-semibold text-[13px] bg-white/5 border border-[#e4ded7]/10 rounded-full px-3 py-1 hover:bg-white/10 hover:border-[#e4ded7]/30 transition-all select-none">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
