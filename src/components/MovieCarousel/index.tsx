import { Link } from "react-router-dom";
import CarouselMShow from "../CarouselMShow";
import { useEffect, useState } from "react";
import { ApicallData, ResponseArray } from "../../Types";
import api from "../../api";
import { AxiosResponse } from "axios";
import { MdNavigateNext } from "react-icons/md";

interface MovieCarouselProps {
  title: string;
  url: string;
}

export const MovieCarousel = ({ title, url }: MovieCarouselProps) => {
  const [data, setData] = useState<ResponseArray>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const FetchData = () => {
      api
        .get(url)
        .then((res: AxiosResponse<ApicallData>) => {
          setLoading(true);
          setData(res.data?.results);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          console.log("Error Occurred");
        });
    };
    FetchData();
  }, [url]);

  const navigate_url: string = title.split(" ").join("_").toLowerCase();

  return (
    <div className="p-3 text-white flex flex-col gap-3 my-4">
      <div className="flex flex-row justify-start items-center gap-4 font-meri font-bold sm:text-xl text-purple-400 select-none">
        <span className="font-extrabold">{title}</span>
        <Link
          to={`/movies/${navigate_url}`}
          className="flex text-base flex-row items-center text-white hover:border-b-4 hover:border-white transition-all gap-1"
        >
          <span>SEE ALL</span>
          <MdNavigateNext size={30} />
        </Link>
      </div>
      <CarouselMShow loading={loading} data={data} navigateURL={navigate_url} />
    </div>
  );
};
