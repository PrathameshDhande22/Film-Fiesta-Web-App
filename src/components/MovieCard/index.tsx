import { Link } from "react-router-dom";
import { ResPonseData } from "../../Types";
import { getImageURL } from "../../utils";
import { motion } from "framer-motion";
import { Img } from "react-image";
import { RiseLoader } from "react-spinners";

interface MovieCardProps {
  data: ResPonseData;
}

export const MovieCard = ({ data }: MovieCardProps) => {
  const posterImage: string = getImageURL(data.poster_path, "/w185");

  const date: number = new Date(data.release_date).getFullYear();
  return (
    <Link to={`/movie/${data.id}`} className=" ">
      <motion.div
        className="flex flex-col flex-wrap items-center gap-2 h-fit border-2 border-gray-400 rounded-xl w-fit p-1 box-content"
        initial={{ opacity: 0, y: 300 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, type:"spring", bounce: 0.2, delay: 0.1 },
        }}
        viewport={{ once: true }}
      >
        <Img
          src={posterImage}
          alt={`Image of ${data.title}`}
          className="w-fit"
          loader={<RiseLoader color="gray" className="p-10"/>}
        />
        <div className="flex flex-col gap-2 font-lora w-[185px] p-2 flex-wrap items-center ">
          <span className="">{data.title}</span>
          <span className="text-gray-400 font-bold text-sm">{date}</span>
        </div>
      </motion.div>
    </Link>
  );
};
