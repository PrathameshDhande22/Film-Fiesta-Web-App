import { useCallback, useEffect, useState } from "react";
import { ApicallData, ResPonseData, ResponseArray } from "../../Types";
import api from "../../api";
import { AxiosResponse } from "axios";
import { MovieCard } from "../MovieCard";
import { urlString } from "../../utils";
import InfiniteScroll from "react-infinite-scroller";
import { Loader } from "../Loader";

interface MovieMainCardProps {
  url: string;
  type:
    | "Popular"
    | "Trending"
    | "Now Playing"
    | "Top Rated"
    | "Top Grosser"
    | "Search";
  query?: string | null;
}

const MovieMainCard = ({ url, type, query }: MovieMainCardProps) => {
  const [data, setData] = useState<ResponseArray>([]);
  const [, setLoading] = useState<boolean>(true);
  const [hasNextPage, sethasNextPage] = useState<boolean>(true);
  const [pageNo, setPageNo] = useState<number>(1);

  const loadMore = useCallback(() => {
    api
      .get(
        type === "Search"
          ? urlString(pageNo, "Search", query)
          : urlString(pageNo, type)
      )
      .then((res: AxiosResponse<ApicallData>) => {
        if (res.data.total_pages <= pageNo) {
          sethasNextPage(false);
          setPageNo(1);
        } else {
          setLoading(true);
          setData([...data, ...res.data.results]);
          setLoading(false);
          setPageNo((pageNo) => pageNo + 1);
        }
      })
      .catch(() => {
        setLoading(false);
        console.log("Error Occured");
      });
  }, [pageNo, type, data, query]);

  useEffect(() => {
    api
      .get(url)
      .then((res: AxiosResponse<ApicallData>) => {
        setLoading(true);
        setData(res.data.results);
        setLoading(false);
        setPageNo((page) => page + 1);
      })
      .catch(() => {
        console.log("Error Occured");
      });
  }, [url]);

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={loadMore}
      hasMore={hasNextPage}
      loader={
        <div key={45} className="h-42 w-full">
          <Loader outerClassName="w-full h-32" />
        </div>
      }
      useWindow
    >
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 items-center lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 place-content-center place-items-center">
        {data.map((value: ResPonseData, index: number) => {
          if (value.poster_path != null) {
            return <MovieCard key={index} data={value} />;
          }
        })}
      </div>
    </InfiniteScroll>
  );
};
export default MovieMainCard;
