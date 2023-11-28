import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Movie, Movies, Search } from "../Pages";
import { urlString } from "../utils";

const Routers = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route
          path="/movies/popular"
          element={<Movies title="Popular" url={urlString(1, "Popular")} />}
        />
        <Route
          path="/movies/top_rated"
          element={<Movies title="Top Rated" url={urlString(1, "Top Rated")} />}
        />
        <Route
          path="/movies/now_playing"
          element={
            <Movies title="Now Playing" url={urlString(1, "Now Playing")} />
          }
        />
        <Route
          path="/movies/top_grosser"
          element={
            <Movies title="Top Grosser" url={urlString(1, "Top Grosser")} />
          }
        />
        <Route
          path="/movies/trending"
          element={<Movies title="Trending" url={urlString(1, "Trending")} />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
export default Routers;
