import { SiteContent } from "./site-content";

const captureNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36,
];

export const defaultSiteContent: SiteContent = {
  settings: {
    id: 1,
    profileName: "ABI KRISHNA",
    profileImageUrl: "/Abikrishna T.jpeg",
    resumeUrl:
      "https://resolute-theater-bd2.notion.site/Resume-1b9a8cfceff181759799cb9305ecf476?source=copy_link",
    email: "abikrishna15@gmail.com",
    behanceUrl: "https://www.behance.net/abikrishna15",
    linkedinUrl: "https://www.linkedin.com/in/abi-krishna-15abi/",
    heroPrimaryText:
      "Graphic & UI/UX Designer, shaping brands and digital experiences.",
    heroSecondaryText:
      "Designing interfaces with purpose, available for freelance & collaborations.",
    contactTitle: "Let's Connect",
    contactIntroText: "Let's chat over ideas, design, or coffee.",
  },
  songs: captureNumbers.map((value, index) => ({
    id: index + 1,
    imageUrl: `/Captures/${value}.jpg`,
    sortOrder: index,
    isActive: true,
  })),
  designs: [
    {
      id: 1,
      name: "Graphic Designs",
      imageUrl: "/graphic designer.jpg",
      url: "https://resolute-theater-bd2.notion.site/Designs-Graphic-UI-UX-1b9a8cfceff181f9a5d1e6953ebb88e7?source=copy_link",
      sortOrder: 0,
      isActive: true,
    },
    {
      id: 2,
      name: "UI/UX Designs",
      imageUrl: "/uiux.jpg",
      url: "https://resolute-theater-bd2.notion.site/Designs-Graphic-UI-UX-1b9a8cfceff181f9a5d1e6953ebb88e7?source=copy_link",
      sortOrder: 1,
      isActive: true,
    },
    {
      id: 3,
      name: "Visual Designs",
      imageUrl: "/visual designer.jpg",
      url: "https://resolute-theater-bd2.notion.site/Designs-Graphic-UI-UX-1b9a8cfceff181f9a5d1e6953ebb88e7?source=copy_link",
      sortOrder: 2,
      isActive: true,
    },
  ],
  works: [
    {
      id: 1,
      name: "Hanioo",
      description:
        "Hanioo is a user-friendly platform connecting interpreters and clients for seamless communication, transparent booking, and secure payment management.",
      technologies: ["Figma", "UI/UX Design", "Julius AI", "Mira"],
      figmaUrl:
        "https://www.figma.com/proto/GGLyNXbkrHmvXWZD4ks84u/Case-Study-Template---Creative-Ferry--Community-?node-id=282-79&p=f&t=DIvFzj94SlEW0MeU-1&scaling=min-zoom&content-scaling=fixed&page-id=282%3A58",
      demoUrl: "",
      imageUrl: "/0.jpg",
      available: true,
      sortOrder: 0,
      isActive: true,
    },
    {
      id: 2,
      name: "B2M Business Solutions",
      description:
        "Corporate website design for B2M Business Solutions, presenting IT and business services with a clean, structured layout aimed at professional credibility and client trust.",
      technologies: ["Figma", "UI/UX Design", "Business Website"],
      figmaUrl:
        "https://www.figma.com/design/3cJPem7H5aVhIZ0ddset8o/B2M-Business-Solution?node-id=0-1&t=WIQM71gJHfY2ACV1-1",
      demoUrl: "https://www.b2mbs.com/",
      imageUrl: "/2.png",
      available: true,
      sortOrder: 1,
      isActive: true,
    },
    {
      id: 3,
      name: "Rajam Taxi",
      description:
        "Responsive website design for Rajam Taxi, a regional cab service, offering fast access to booking, pricing, and contact information for local travelers.",
      technologies: ["Figma", "UI/UX Design", "Taxi Website"],
      figmaUrl:
        "https://www.figma.com/design/w8shOmeU1cpusaqnMpGPKy/Cab?node-id=0-1&t=PwKQoFFVfbWALXbw-1",
      demoUrl: "https://rajamtaxiservice.in/",
      imageUrl: "/4.jpg",
      available: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      id: 4,
      name: "AdConvo",
      description:
        "Dashboard UI for AdConvo, a digital marketing campaign manager with modules for ad performance tracking, budget analytics, and client reports.",
      technologies: ["Figma", "UI/UX Design", "Dashboard"],
      figmaUrl:
        "https://www.figma.com/design/jIEYAozZcFsIKDaOEjiIcu/Adconvo?t=PwKQoFFVfbWALXbw-1",
      demoUrl: "https://www.behance.net/gallery/220641749/AdConvo",
      imageUrl: "/1.jpg",
      available: true,
      sortOrder: 3,
      isActive: true,
    },
  ],
  blogs: [
    {
      id: 1,
      title:
        "Transforming a Regular Interpretation Service into an Aggregated Interpretation App",
      imageUrl: "/Language.jpg",
      dateLabel: "MAY 2024",
      url: "https://abikrishna.super.site/1f4a8cfceff1808ba938fd06770610e7",
      available: true,
      sortOrder: 0,
      isActive: true,
    },
    {
      id: 2,
      title: "Look Walker Strategy to Elevate G-Force in the Local Market",
      imageUrl: "/look-walker-branding.jpeg.jpg",
      dateLabel: "MAY 2024",
      url: "https://abikrishna.super.site/case-study-2-look-walker-strategy-to-elevate-g-force-in-the-local-market",
      available: true,
      sortOrder: 1,
      isActive: true,
    },
    {
      id: 3,
      title: "Developing a Marketing Campaign Tracking Platform",
      imageUrl: "/Revenue.jpg",
      dateLabel: "APR 2024",
      url: "https://abikrishna.super.site/1f4a8cfceff18042bc3ff382ef795532",
      available: true,
      sortOrder: 2,
      isActive: true,
    },
    {
      id: 4,
      title: "Flipkart and Amazon Case Study",
      imageUrl: "/Flipkart-and-Amazon.jpg",
      dateLabel: "MAY 2024",
      url: "https://abikrishna.super.site/flipkart-and-amazon-case-study",
      available: true,
      sortOrder: 3,
      isActive: true,
    },
    {
      id: 5,
      title: "Rapido's Next Big Move: Reinventing Metro Travel & Bike Taxis",
      imageUrl: "/Rapido.png",
      dateLabel: "MAY 2024",
      url: "https://abikrishna.super.site/rapidos-next-big-move-reinventing-metro-travel-bike-taxis",
      available: true,
      sortOrder: 4,
      isActive: true,
    },
    {
      id: 6,
      title:
        "Revenue Generation and Campaign Management on Facebook & Instagram",
      imageUrl: "/Differences-Between-Facebook-and-Instagram-Ads.jpg",
      dateLabel: "APR 2024",
      url: "https://abikrishna.super.site/revenue-generation-and-campaign-management-on-facebook-instagram",
      available: true,
      sortOrder: 5,
      isActive: true,
    },
  ],
};
