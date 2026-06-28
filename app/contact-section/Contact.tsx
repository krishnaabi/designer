import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/favicon.ico";
import { SiteSettings } from "../lib/site-content";

type ContactProps = {
  settings: SiteSettings;
};

const Contact = ({ settings }: ContactProps) => {
  const subject = encodeURIComponent("Lets work together!");
  const body = encodeURIComponent(
    "Hello, I think we need you to work on/collaborate on this product. Reach out as soon as you can.",
  );
  const mailToUrl = `mailto:${settings.email}?subject=${subject}&body=${body}`;

  return (
    <motion.section
      className="relative z-10 flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 lg:py-24"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1200px]">
        <div
          className={`relative flex w-full flex-col items-start justify-center ${monaSans.className} sm:items-center mb-12`}
        >
          <AnimatedTitle
            text="Let's build something meaningful together."
            className="text-left sm:text-center text-[38px] sm:text-[52px] md:text-[68px] lg:text-[84px] font-extrabold uppercase leading-[1.0em] tracking-tighter text-[#e4ded7]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.001em]"
          />
        </div>

        <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left border-t border-[#e4ded7]/20 pt-12">
          {/* Column 1: Email */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#e4ded7]/60">
              Email
            </span>
            <Link
              href={mailToUrl}
              className="text-[16px] sm:text-[18px] font-bold text-[#e4ded7] hover:underline underline-offset-4"
            >
              {settings.email}
            </Link>
          </div>

          {/* Column 2: Location */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#e4ded7]/60">
              Location
            </span>
            <span className="text-[16px] sm:text-[18px] font-bold text-[#e4ded7]">
              Chennai, India
            </span>
          </div>

          {/* Column 3: Availability */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#e4ded7]/60">
              Availability
            </span>
            <span className="text-[16px] sm:text-[18px] font-bold text-[#e4ded7]">
              Available for Full-time Product Design Roles
            </span>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#e4ded7]/60">
              Follow Me
            </span>
            <div className="flex gap-4 text-[16px] sm:text-[18px] font-bold text-[#e4ded7]">
              <Link
                href={settings.behanceUrl}
                target="_blank"
                className="hover:underline underline-offset-4"
                aria-label="View Behance Profile"
              >
                Behance
              </Link>
              <Link
                href={settings.linkedinUrl}
                target="_blank"
                className="hover:underline underline-offset-4"
                aria-label="View LinkedIn Profile"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
