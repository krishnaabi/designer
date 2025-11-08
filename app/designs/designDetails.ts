import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type DesignProps = {
  name: string;
  image: string;
  index: number;
  url: string;
};

export const designDetails = [
  {
    name: "Graphic Designs",
    image: require("../../public/graphic designer.jpg"),
    url: "https:google.com",
  },
  {
    name: "UI/UX Designs",
    image: require("../../public/uiux.jpg"),
    url: "https:google.com",
  },
  {
    name: "Visual Designs",
    image: require("../../public/visual designer.jpg"),
    url: "https:google.com",
  }
];
