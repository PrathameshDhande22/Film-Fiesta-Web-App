import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export const SearchBar = () => {
  const [click, setClick] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const navigate: NavigateFunction = useNavigate();
  const [, setSearchParams] = useSearchParams();

  const location = useLocation();
  useEffect(() => {
    if (query !== "") {
      setSearchParams({ q: query });
    }
  }, [query, setSearchParams]);

  return (
    <div
      className={`font-robonto flex flex-row gap-3 bg-gray-600 p-2 rounded-lg items-center md:w-1/2
      ${click ? "active-search" : "inactive-search"}`}
      onFocus={() => {
        setClick(true);
      }}
      onBlur={() => {
        setClick(false);
      }}
    >
      <label htmlFor="searchbox" className="">
        <IoSearch size={24} className="text-gray-400" />
      </label>
      <input
        type="text"
        name="search"
        id="searchbox"
        className="outline-none bg-gray-600 text-white "
        placeholder="Search Here"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value.length !== 0 || e.target.value != null) {
            if (location.pathname !== "/search") {
              navigate("/search");
            }
            setQuery(e.target.value);
          }
        }}
      />
    </div>
  );
};
