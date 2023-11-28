import { Carousels, MovieCarousel } from "../../components";
import { setTitle, urlString } from "../../utils";

export const Home = () => {
  setTitle("Film Fiesta - A Web app to search your Favourite Movie");
  return (
    <>
      <Carousels />
      <MovieCarousel title="Popular" url={urlString(1, "Popular")} />
      <MovieCarousel title="Top Rated" url={urlString(1, "Top Rated")} />
      <MovieCarousel title="Now Playing" url={urlString(1, "Now Playing")} />
      <MovieCarousel title="Top Grosser" url={urlString(1, "Top Grosser")} />
      <MovieCarousel title="Trending" url={urlString(1, "Trending")} />
    </>
  );
};
