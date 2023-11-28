import { useEffect } from "react";
import { MovieMainCard } from "../../components";
import { setTitle } from "../../utils";

interface MoviesProps {
  title: "Popular" | "Trending" | "Now Playing" | "Top Rated" | "Top Grosser";
  url: string;
}

const Movies = ({ title, url }: MoviesProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  setTitle(`${title} Movies - Film Fiesta`);
  return (
    <div className="text-white md:mx-16 mx-5 my-3">
      <span className="font-body md:text-4xl text-2xl font-extrabold text-gray-400">
        {title}
      </span>
      <div className="my-3">
        <MovieMainCard url={url} type={title} />
      </div>
    </div>
  );
};
export default Movies;
