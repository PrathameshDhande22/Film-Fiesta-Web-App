import { PropagateLoader } from "react-spinners";

type LoaderProps = {
  outerClassName: string;
};

export const Loader = ({ outerClassName }: LoaderProps) => {
  return (
    <div
      className={`flex flex-col gap-5 w-full justify-center items-center my-3 content-center ${outerClassName}`}
    >
      <PropagateLoader color="#36d7b7" />
      <div className="font-serif font-black text-xl">Loading</div>
    </div>
  );
};
