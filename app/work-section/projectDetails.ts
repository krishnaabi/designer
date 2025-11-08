export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  figma: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Hanioo",
    description:
      "Hanioo is a user-friendly platform connecting interpreters and clients for seamless communication, transparent booking, and secure payment management..",
    technologies: ["Figma", "UI/UX Design", "Julius AI", "Mira"],
    figma: "https://www.figma.com/proto/GGLyNXbkrHmvXWZD4ks84u/Case-Study-Template---Creative-Ferry--Community-?node-id=206-28&p=f&t=bNPPsvK9YMMsa2JD-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    image: require(".//../../public/0.jpg"),
    available: true,
    demo: "",
  },
  {
    id: 1,
    name: "B2M Business Solutions",
    description:
      "Corporate website design for B2M Business Solutions, presenting IT and business services with a clean, structured layout aimed at professional credibility and client trust.",
    technologies: ["Figma", "UI/UX Design", "Business Website"],
    figma: "https://www.figma.com/design/3cJPem7H5aVhIZ0ddset8o/B2M-Business-Solution?node-id=0-1&t=WIQM71gJHfY2ACV1-1",
    demo: "https://www.b2mbs.com/",
    image: require(".//../../public/2.png"),
    available: true,
  },
  {
    id: 2,
    name: "Rajam Taxi",
    description:
      "Responsive website design for Rajam Taxi, a regional cab service, offering fast access to booking, pricing, and contact information for local travelers.",
    technologies: ["Figma", "UI/UX Design", "Taxi Website"],
    figma: "https://www.figma.com/design/w8shOmeU1cpusaqnMpGPKy/Cab?node-id=0-1&t=PwKQoFFVfbWALXbw-1",
    demo: "https://rajamtaxiservice.in/",
    image: require(".//../../public/4.jpg"),
    available: true,
  },
  {
    id: 3,
    name: "AdConvo",
    description:
      "Dashboard UI for AdConvo, a digital marketing campaign manager with modules for ad performance tracking, budget analytics, and client reports.",
    technologies: ["Figma", "UI/UX Design", "Dashboard"],
    figma: "https://www.figma.com/design/jIEYAozZcFsIKDaOEjiIcu/Adconvo?t=PwKQoFFVfbWALXbw-1",
    demo: "https://www.behance.net/gallery/220641749/AdConvo",
    image: require(".//../../public/1.jpg"),
    available: true,
  },
  {
    id: 4,
    name: "YumAI",
    description:
      "App design for YumAI, an AI-powered food and recipe app that personalizes meal suggestions based on user preferences, health goals, and dietary needs.",
    technologies: ["Figma", "UI/UX Design", "Mobile App"],
    figma: "https://www.figma.com/design/thcUgBZtNexGKTWqLY25C1/YumAI-App?m=auto&t=PwKQoFFVfbWALXbw-1",
    demo: "https://www.behance.net/gallery/209806095/YumAI",
    image: require(".//../../public/5.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
