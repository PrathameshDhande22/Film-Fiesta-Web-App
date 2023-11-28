import { useSearchParams } from "react-router-dom";
import { MovieMainCard } from "../../components";
import { setTitle, urlString } from "../../utils";

const Search = () => {
  const [params] = useSearchParams();
  const query: string | null = params.get("q");
  setTitle(`${query} - Film Fiesta`);
  return (
    <div className="text-white md:mx-16 mx-5">
      {query?.length != 0 || query !== null ? (
        <div className="space-y-4 p-2">
          <div className="font-mono text-2xl">
            <span>Search Results For : </span>
            <span className="text-gray-400 font-bold">{query}</span>
          </div>
          <MovieMainCard
            type="Search"
            url={urlString(1, "Search", query)}
            query={query}
          />
        </div>
      ) : null}
    </div>
  );
};
export default Search;
