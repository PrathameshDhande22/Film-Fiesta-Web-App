import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Generes, MovieResponseData } from "../../Types";
import api from "../../api";
import { AxiosResponse } from "axios";
import {
  CreditCarousel,
  Loader,
  Production,
  VideosCarousels,
} from "../../components";
import { getImageURL, getDummyMovieData, setTitle } from "../../utils";
import { Img } from "react-image";
import { ClipLoader } from "react-spinners";
import { GrStar } from "react-icons/gr";
import nf from "@tuplo/numberfmt";
import moment from "moment";
import { round } from "mathjs";
import { FaImdb } from "react-icons/fa";

const Movie = () => {
  const [data, setData] = useState<MovieResponseData>(getDummyMovieData());
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    api
      .get(`/movie/${id}?append_to_response=videos,credits,images&language=IN`)
      .then((res: AxiosResponse<MovieResponseData>) => {
        setLoading(true);
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        console.log("Error Occured");
      });
  }, [id]);

  return (
    <div className="text-white">
      {loading ? (
        <Loader outerClassName="h-screen" />
      ) : (
        <MoviePage data={data} />
      )}
    </div>
  );
};
export default Movie;

type MoviePageProps = {
  data: MovieResponseData;
};

export const MoviePage = ({ data }: MoviePageProps) => {
  const backdropImage: string = getImageURL(data.backdrop_path, "/w1280");
  const posterImage: string = getImageURL(data.poster_path, "/w342");

  const runtime_string: string =
    Math.floor(data.runtime / 60) + "h " + (data.runtime % 60) + "min";

  const year: number = new Date(data.release_date).getFullYear();
  setTitle(`${data.title} (${year}) - Film Fiesta`);

  const totalVotes: string = nf(data.vote_count, "0,0a");

  const releaseData: string = moment(data.release_date).format("MMMM DD, YYYY");

  return (
    <div className="">
      <div className="p-2 text-white relative w-full md:h-fit">
        <Img
          loader={<ClipLoader size={20} color="green" />}
          src={backdropImage}
          alt={`Image of ${data.title}`}
          className="md:h-[95vh] md:w-full object-cover"
        />
        <div className="absolute bg-gradient-to-r from-black md:from-40% from-20% opacity-80 via-transparent to-transparent top-0 h-full w-full"></div>
        <div className="absolute bottom-0 bg-gradient-to-t from-black from-5%  to-transparent via-transparent via-35% h-full w-full opacity-90"></div>
        <div className="md:absolute relative z-10 lg:top-[40%] md:top-[20%] md:w-[50%] lg:w-[60%] md:mx-16 mx-3 flex flex-col justify-start gap-4 md:gap-5 mt-4">
          <div className="">
            <span className="font-playpen md:text-4xl font-bold text-xl select-none block">
              {data.title}
            </span>
            <span className="text-slate-400 font-sans text-sm font-semibold block">
              {data.tagline}
            </span>
          </div>
          <span className="font-lora tracking-wide text-sm md:text-base">
            {data.overview}
          </span>
          <span className="space-x-3 font-sans text-gray-400 font-semibold">
            <span>{runtime_string}</span>
            <span>{year}</span>
          </span>
          <span className="flex flex-row flex-wrap justify-start gap-2">
            {data.genres.map((value: Generes, index: number) => {
              return (
                <span
                  key={index}
                  className="font-meri text-sm md:text-base px-4 border-2 border-gray-400 py-1 rounded-2xl"
                >
                  {value.name}
                </span>
              );
            })}
          </span>
          <span className="relative border-2 rounded-full border-gray-500 md:w-fit px-5 md:py-2 py-1 flex justify-center w-full hover:bg-white hover:text-black transition-colors text-gray-500">
            <a
              href={`http://imdb.com/title/${data.imdb_id}`}
              target="_blank"
              className="flex flex-row flex-wrap gap-2 items-center font-display font-bold"
            >
              <FaImdb size={30} color="e2b616" />
              <span>IMDb Link</span>
            </a>
          </span>
        </div>
      </div>
      <div className="mt-7 mx-4 md:mx-16 flex flex-row justify-evenly flex-wrap gap-8 sm:justify-center items-center content-center">
        <Img
          src={posterImage}
          loader={<ClipLoader size={20} color="yellow"/>}
          className="md:h-72 h-52"
        />
        <div className="flex flex-col flex-wrap text-lg font-itim md:gap-2">
          <span className="flex items-center font-mono md:text-lg font-semibold gap-1">
            <GrStar size={25} color="#fcba03" />
            <span>
              {round(data.vote_average, 1)}
              <span className="text-gray-400">/10</span>
            </span>
          </span>
          <span className="text-gray-400">{totalVotes} Votes</span>
          <span>Release Date : {releaseData}</span>
          <span>
            <span>Languages : </span>
            <span>
              {data.spoken_languages.map((value, index) => {
                return (
                  <span key={index} className="mr-2">
                    {value.english_name}
                  </span>
                );
              })}
            </span>
          </span>
        </div>
        <div className=" relative p-2 flex  justify-center w-full sm:w-fit">
          <span className="font-mono text-base absolute top-0 px-2 flex justify-center items-center w-fit bg-purple-500 text-black font-black rounded-xl">
            BUDGET
          </span>
          <div className="border-4 border-purple-500 rounded-2xl p-4 px-10 w-full  flex flex-col font-itim md:text-lg md:gap-2 ">
            <span>Budget : $ {nf(data.budget.toString(), "0a")}</span>
            <span>Revenue : $ {nf(data.revenue.toString(), "0a")}</span>
          </div>
        </div>
      </div>
      <div className="my-4 space-y-4 md:mx-16">
        <Production data={data.production_companies} />
        {data.videos.results.length == 0 ? null : (
          <VideosCarousels key={3} data={data?.videos?.results} />
        )}
        <CreditCarousel key={1} title="Cast" data={data?.credits?.cast} />
        <CreditCarousel key={2} title="Crew" data={data?.credits?.crew} />
      </div>
    </div>
  );
};
