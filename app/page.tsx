"use client";
import Hero from "./hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect, useState } from "react";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";
import Reviews from "./reviews-section/ReviewGrid";
import DesignsGrid from "./designs/DesignsGrid";
import { SiteContent } from "./lib/site-content";
import { defaultSiteContent } from "./lib/default-site-content";
import Work from "./work-section/Work";
import About from "./about-section/About";
import Blog from "./blog-section/BlogGrid";
import Contact from "./contact-section/Contact";
import Footer from "./footer/Footer";

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadSiteContent = async () => {
      try {
        const response = await fetch("/api/site-content", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as SiteContent;
        if (isMounted) {
          setContent(data);
        }
      } catch (error) {
        console.error("Failed to load dynamic site content.", error);
      }
    };

    void loadSiteContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <PreLoader />

      <NavBar resumeUrl={content.settings.resumeUrl} />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <Hero settings={content.settings} />
        <About songs={content.songs} />
        <Reviews/>
        <DesignsGrid designs={content.designs} />
        <Work works={content.works} />
        <Blog blogs={content.blogs} linkedinUrl={content.settings.linkedinUrl} />
        <Contact settings={content.settings} />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
