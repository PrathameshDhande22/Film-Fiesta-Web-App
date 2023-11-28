import moment, { Moment } from "moment";
import { ResPonseData } from "../../Types";
import { getImageURL } from "../../utils";
import nf from "@tuplo/numberfmt";
import { Link } from "react-router-dom";

export type ImageShowProps = {
  data: ResPonseData;
};

export const ImageShow = ({ data }: ImageShowProps) => {
  const imageurl: string = getImageURL(data.backdrop_path, "/w780");

  const r_date: Moment = moment(data.release_date);
  const suffix: string = nf(Number(r_date.format("DD")), "0o");

  const date: string = suffix.concat(r_date.format(" MMM YYYY"));

  return (
    <Link to={`/movie/${data.id}`}>
      <div className="shadow-2xl select-none cursor-pointer shadow-black lg:h-[400px] relative border-x-8 border-black 2xl:h-[600x]">
        <img
          src={imageurl}
          alt={`Image of movie ${data.title}`}
          className="h-full object-fill"
        />
        <div className="h-full w-full absolute top-0 bg-gradient-to-r from-black from-10% via-black via-10% opacity-80 z-30 "></div>

        <div className="text-white absolute bottom-0 w-1/2 z-50 sm:h-1/2 h-full pt-3 flex sm:pl-7 pl-3 left-0 flex-col justify-start items-start content-start gap-2">
          <span className="font-playpen sm:text-3xl font-semibold text-base">
            {data.title}
          </span>
          <p className="text-sm tracking-normal  self-start text-left line-clamp-3 md:line-clamp-none">
            {data.overview}
          </p>
          <span className="text-xs font-lora font-extrabold sm:text-base self-start text-left">
            Set to Release On <span className="text-green-400">{date}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};
