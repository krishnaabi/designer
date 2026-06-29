import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { SongItem } from "../lib/site-content";

type AboutProps = {
  songs: SongItem[];
};

const About = ({ songs }: AboutProps) => {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "10+", label: "Digital Products" },
    { value: "5+", label: "Countries Served" }
  ];

  const skillCategories = [
    {
      title: "UX Design",
      skills: [
        "User Research", "Information Architecture", "User Flows", "Wireframing",
        "Interaction Design", "Prototyping", "High-Fidelity UI Design", "Usability Testing",
        "Journey Mapping", "Design Systems", "Responsive Design", "WCAG Accessibility"
      ]
    },
    {
      title: "Design Tools",
      skills: [
        "Figma", "FigJam", "Miro", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD", "CorelDRAW", "Canva"
      ]
    },
    {
      title: "Technical",
      skills: [
        "HTML", "CSS", "Basic JavaScript", "Developer Handoff", "Flutter Collaboration"
      ]
    },
    {
      title: "Product & Domain",
      skills: [
        "SaaS Products", "B2B & B2C Platforms", "Product Thinking", "AI-native Interface Design", "Generative AI for UX"
      ]
    },
    {
      title: "Collaboration",
      skills: [
        "Agile Methodology", "Cross-functional Collaboration", "Stakeholder Communication", "Jira", "Design Reviews"
      ]
    }
  ];

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 md:pt-20 lg:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"I DESIGN DIGITAL PRODUCTS THAT SOLVE REAL PROBLEMS."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          {/* Left side: Stats & Paragraphs */}
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:w-[65%] lg:text-[24px]">
            <h3 className="text-[20px] font-bold uppercase tracking-wider text-[#e4ded7]/70">About me</h3>
            
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-4 mt-2">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col rounded-xl border border-[#e4ded7]/10 bg-[#e4ded7]/5 p-4 text-left backdrop-blur-sm transition-all duration-300 hover:border-[#e4ded7]/30">
                  <span className="text-[28px] font-extrabold text-[#e4ded7] sm:text-[32px]">{stat.value}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#e4ded7]/60 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            <AnimatedBody
              text={
                "I'm a Product & UI/UX Designer with 4+ years of experience creating user-centered digital products across SaaS, B2B, B2C, and eCommerce."
              }
            />
            <AnimatedBody
              text={
                "I specialize in transforming business goals into intuitive user experiences through research, wireframing, prototyping, usability testing, and scalable design systems."
              }
            />
            <AnimatedBody
              text={
                "At Honey Universal Digital, I lead the product design for Hanioo, collaborating with product managers and developers to transform user insights into scalable digital experiences."
              }
            />
            <AnimatedBody
              text={
                "I enjoy solving complex UX challenges, simplifying user journeys, and designing digital products that create measurable value for both users and businesses."
              }
            />
          </div>

          {/* Right side: Skills Pill Badges */}
          <div className="mb-24 flex w-[100%] flex-col gap-6 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:w-[35%] lg:text-[18px]">
            {skillCategories.map((cat, index) => (
              <div key={index} className="flex flex-col gap-3">
                <AnimatedTitle
                  text={cat.title}
                  className={"text-[20px] font-bold text-[#e4ded7] md:text-[22px] lg:text-[18px] uppercase tracking-wider"}
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"mr-[0.01em]"}
                />
                <div className="flex flex-wrap gap-2 mt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-full border border-[#e4ded7]/15 bg-[#e4ded7]/5 px-3 py-1.5 text-[12px] font-medium text-[#e4ded7]/90 transition-all duration-300 hover:border-[#e4ded7]/40 hover:bg-[#e4ded7]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28 w-full relative h-[280px] sm:h-[220px] md:h-[240px] lg:h-[280px]">
          <SongCarousel songs={songs} />
          <AnimatedBody
            text="Selected Branding & Visual Design Projects"
            className="absolute bottom-0 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-0 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
