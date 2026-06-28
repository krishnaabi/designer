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
      "Graphic & UI/UX Designer - Product Designer crafting user experiences that increase conversion and simplify complex workflows.",
    heroSecondaryText:
      "Designing intuitive digital products through research, strategy, and collaboration.",
    contactTitle: "Let's build something meaningful together.",
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
      name: "Graphic Design",
      description: "Explore 25+ branding and visual identity projects.",
      imageUrl: "/graphic designer.jpg",
      url: "https://resolute-theater-bd2.notion.site/Designs-Graphic-UI-UX-1b9a8cfceff181f9a5d1e6953ebb88e7?source=copy_link",
      sortOrder: 0,
      isActive: true,
    },
    {
      id: 2,
      name: "Product Design",
      description: "Explore UX case studies, wireframes, user research, design systems, and interactive prototypes.",
      imageUrl: "/uiux.jpg",
      url: "https://resolute-theater-bd2.notion.site/Designs-Graphic-UI-UX-1b9a8cfceff181f9a5d1e6953ebb88e7?source=copy_link",
      sortOrder: 1,
      isActive: true,
    },
    {
      id: 3,
      name: "Marketing Design",
      description: "View campaign creatives, advertisements, and social media assets.",
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
        "https://www.behance.net/gallery/248442393/Hanioo-Interpretation-Application",
      demoUrl: "https://play.google.com/store/apps/details?id=com.honey.hanioo&pcampaignid=web_share",
      imageUrl: "/0.jpg",
      available: true,
      sortOrder: 0,
      isActive: true,
    },
    {
      id: 2,
      name: "SreeSivam",
      description:
        "SreeSivam is a premium devotional e-commerce platform specializing in authentic South Indian religious artifacts, traditional Golu dolls, brass pooja items, and sacred collectibles. The platform serves devout customers seeking genuine, high-quality devotional products with cultural authenticity.",
      technologies: ["E-commerce", "UI Designs", "UX Designs"],
      figmaUrl:
        "https://www.figma.com/proto/JZE1P2FLlfolpAhvI7auSH/Designs?node-id=3-2&t=U5GkbAzDjkfSLFNT-1",
      demoUrl: "https://www.sreesivam.com/",
      imageUrl: "https://fiiljywqbkyxunyolexq.supabase.co/storage/v1/object/public/portfolio-assets/works/1776305679507-influencer-marketing-1.jpg",
      available: true,
      sortOrder: 1,
      isActive: true,
    },
    {
      id: 3,
      name: "Flubn",
      description:
        "FLUBN is a B2B/B2C marketplace designed specifically for the Indian influencer marketing ecosystem. The platform addresses the trust deficit between brands and influencers by implementing a comprehensive verification system, mutual-consent contact sharing, tiered subscription plans, and real-time chat. Every design decision was rooted in user research conducted with 10+ Indian brands and influencers.",
      technologies: ["PRODUCT DESIGN", "DESIGN SYSTEM", "PROTOTYPING", "USER RESEARCH"],
      figmaUrl:
        "https://www.behance.net/gallery/248507725/FLUBN-Indias-Modern-Influencer-Marketplace",
      demoUrl: "",
      imageUrl: "https://fiiljywqbkyxunyolexq.supabase.co/storage/v1/object/public/portfolio-assets/works/1776665706548-dark.png",
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
    {
      id: 15,
      name: "Portagam",
      description:
        "PORTAGAM is a global sourcing & parceling service not a normal e-commerce store. It helps people across the world get authentic local Indian products foods, groceries, sweets, clothing, and specialty goods from multiple places in India, packed together and shipped internationally.",
      technologies: [],
      figmaUrl: "",
      demoUrl: "https://www.portagam.com/",
      imageUrl: "https://fiiljywqbkyxunyolexq.supabase.co/storage/v1/object/public/portfolio-assets/works/1776665814068-international-courier-service-scaled.jpg",
      available: true,
      sortOrder: 4,
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
