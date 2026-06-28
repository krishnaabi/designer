export type SiteSettings = {
  id: number;
  profileName: string;
  profileImageUrl: string;
  resumeUrl: string;
  email: string;
  behanceUrl: string;
  linkedinUrl: string;
  heroPrimaryText: string;
  heroSecondaryText: string;
  contactTitle: string;
  contactIntroText: string;
};

export type SongItem = {
  id: number;
  imageUrl: string;
  sortOrder: number;
  isActive: boolean;
};

export type DesignItem = {
  id: number;
  name: string;
  imageUrl: string;
  url: string;
  sortOrder: number;
  isActive: boolean;
  description?: string;
};

export type WorkItem = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  figmaUrl: string;
  demoUrl: string;
  imageUrl: string;
  available: boolean;
  sortOrder: number;
  isActive: boolean;
  role?: string;
  timeline?: string;
  need?: string;
  isCurrent?: boolean;
};

export type BlogItem = {
  id: number;
  title: string;
  imageUrl: string;
  dateLabel: string;
  url: string;
  available: boolean;
  sortOrder: number;
  isActive: boolean;
};

export type SiteContent = {
  settings: SiteSettings;
  songs: SongItem[];
  designs: DesignItem[];
  works: WorkItem[];
  blogs: BlogItem[];
};
