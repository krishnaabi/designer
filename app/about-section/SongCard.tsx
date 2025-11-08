import Image from "next/image";
import { SongProps } from "./songDetails";

const SongCard = ({ image }: SongProps) => {
  return (
    <div
      className={`relative flex w-[195px] h-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px]`}
    >
      <Image src={image} alt="image" className="w-full h-full items-stretch justify-center rounded-xl bg-cover bg-center" />
      <div className=" hidden h-[150%] w-full bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default SongCard;
