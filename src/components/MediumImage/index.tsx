import { useState } from "react";
import { ResPonseData } from "../../Types";
import { getImageURL } from "../../utils";
import { motion } from "framer-motion";
import { round } from "mathjs";
import { Link } from "react-router-dom";
import "animate.css";

type MediumImageProps = {
  data: ResPonseData;
};

const MediumImage = ({ data }: MediumImageProps) => {
  const imageUrl: string = getImageURL(data.poster_path, "/w185");

  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <Link
      to={`/movie/${data.id}`}
      className={` relative z-50 overflow-visible sm:mr-5 mr-2 w-[40%] sm:w-fit  ${
        hovered ? "border-2 border-gray-500 rounded-lg sm:p-3" : "border-none"
      }`}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, marginTop: "10px", marginBottom: "20px" }}
        transition={{ delay: 0.2 }}
        className="w-full  relative"
      >
        <img
          src={imageUrl}
          alt={`Image of ${data.title}`}
          className="sm:w-fit object-cover"
        />
      </motion.div>
      {hovered ? (
        <div className=" flex flex-col gap-2 sm:w-[180px] w-fit justify-items-start relative bottom-0 mt-2 p-2 sm:p-0 animate__animated animate__fadeIn animate__slow overflow-hidden">
          <span className="font-robonto sm:text-xl text-base font-semibold">
            {data.title}
          </span>
          <span className="sm:line-clamp-3 line-clamp-5 text-left text-xs">
            {data.overview}
          </span>
          <span className="text-gray-300 inline w-fit  px-3 rounded-full border-2 border-gray-500 text-sm">
            {round<number>(data.vote_average, 1)}
          </span>
        </div>
      ) : null}
    </Link>
  );
};
export default MediumImage;
