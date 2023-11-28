import { Img } from "react-image";
import icon from "../../assets/favicon.ico";
import { PuffLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { motion } from "framer-motion";
import { IN } from "country-flag-icons/react/3x2";
import Marquee from "react-fast-marquee";

export const Header = () => {
  return (
    <nav className="flex select-none flex-row bg-black w-full text-white sm:px-16 items-center justify-center py-3 px-2 flex-wrap z-10 gap-4 sm:text-base text-sm sticky">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Link to={"/"} className="flex flex-row items-center gap-2">
          <Img
            src={icon}
            loader={<PuffLoader color="#36d7b7" size={30} />}
            width={40}
          />
          <span className="font-playpen font-bold text-blue-200 tracking-wider">
            <span className="text-2xl text-sky-400">F</span>ILM{" "}
            <span className="text-2xl text-sky-400">F</span>IESTA
          </span>
          <IN className="self-end h-3" title="India Content" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 3 }}
        className="flex flex-row gap-4 items-center flex-wrap justify-center md:w-4/5"
      >
        <Link to={"/"}>
          <motion.span
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 font-bold text-base flex flex-col justify-center items-center"
          >
            HOME
          </motion.span>
        </Link>
        <SearchBar />
      </motion.div>
      <Marquee className="flex tracking-wider flex-row gap-3 items-center font-robonto text-sm">
        <span className="text-blue-400 font-bold"> NOTE :{"  "} </span>
        <span>
          This website fetches movie information from The Movie Database (TMDB)
          API. Please be aware that there may be inaccuracies or incorrect
          information regarding movies. This project is a personal endeavor, and
          we are not responsible for any miscorrection of data. The components
          rendered on the website are a direct representation of the information
          provided by the TMDB API.
        </span>
      </Marquee>
    </nav>
  );
};
