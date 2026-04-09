import SongCard from "./SongCard";
import "../animations/animate.css";
import { SongItem } from "../lib/site-content";

type SongCarouselProps = {
  songs: SongItem[];
};

const SongCarousel = ({ songs }: SongCarouselProps) => {
  const activeSongs = songs.filter((song) => song.isActive);

  return (
    <>
      <div className="animate absolute bottom-5 flex w-[1100%] border-[1px] border-[#0E1016] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]">
        <div className="mx-auto flex w-[100%] justify-around gap-12 lg:my-[1px]">
          {activeSongs.map((song) => (
            <SongCard key={song.id} image={song.imageUrl} />
          ))}
        </div>
        <div className="mx-auto flex w-[100%] justify-around gap-12 lg:my-[1px]">   
          {activeSongs.map((song) => (
            <SongCard key={`repeat-${song.id}`} image={song.imageUrl} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SongCarousel;
