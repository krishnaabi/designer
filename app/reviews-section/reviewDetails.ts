import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "50+ Projects Delivered",
    testimonial:
      "From user-first mobile apps to brand identities and high-conversion websites, each project reflects a tailored solution that balances function and aesthetics.",
  },
  {
    name: "80% Client Retention",
    testimonial:
      "Most of my clients return for additional work a testament to the trust, quality, and collaboration I bring to every engagement.",
  },
  {
    name: "3.5+ Years Design Experience",
    testimonial:
      "My journey spans across agencies, startups, and freelance projects blending structure, agility, and creative freedom to solve real design problems.",
  },
  {
    name: "4 Core Design Disciplines",
    testimonial:
      "My work spans across Graphic Design, UI/UX Design, No-code Webflow Development, and Brand Identity ensuring cohesive experiences across platforms.",
  },
  {
    name: "Clients in 5+ Countries",
    testimonial:
      "I've had the opportunity to collaborate with brands and founders from India, the UAE, Australia, the U.S., and beyond adapting design sensibilities to global contexts.",
  },
  {
    name: "10+ Websites & 1 App Launched",
    testimonial:
      "I’ve taken ideas from sketches to screens building fast, accessible, and responsive websites, plus one complete cross-platform application.",
  },
  
];
