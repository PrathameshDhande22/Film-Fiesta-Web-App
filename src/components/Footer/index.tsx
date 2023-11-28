import { Img } from "react-image";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import icon from "../../assets/favicon.ico";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black gap-2 text-xs p-4 text-white flex flex-col justify-center items-center content-center font-robonto">
      <Link to={"/"} className="flex flex-row items-center gap-2">
        <Img
          src={icon}
          loader={<PuffLoader color="#36d7b7" size={20} />}
          width={30}
        />
        <span className="font-playpen font-bold text-blue-200 tracking-wider">
          <span className="text-xl text-sky-400">F</span>ILM{" "}
          <span className="text-xl text-sky-400">F</span>IESTA
        </span>
      </Link>
      <div className="flex flex-row justify-center items-center gap-4">
        <span>Created by Prathamesh Dhande</span>
        <a href="http://www.github.com/Prathameshdhande22/Film-Fiesta">
          <IoLogoGithub size={20} />
        </a>
      </div>
      <span>&copy; 2023 Film Fiesta</span>
    </div>
  );
};
export default Footer;
