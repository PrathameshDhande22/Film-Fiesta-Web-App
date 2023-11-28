import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { ResPonseData, ResponseArray } from "../../Types";
import MediumImage from "../MediumImage";
import "@egjs/react-flicking/dist/flicking.css";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";

interface CarouselMShowProps {
  loading: boolean;
  data: ResponseArray;
  navigateURL: string;
}

const CarouselMShow = ({ loading, data, navigateURL }: CarouselMShowProps) => {
  const total: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const plugins: Arrow[] = [
    new Arrow({ moveCount: 3, moveByViewportSize: true }),
  ];

  data = data.filter((value: ResPonseData) => value.poster_path != null);

  return (
    <Flicking
      useFindDOMNode
      align={"prev"}
      bound
      plugins={plugins}
      adaptive={false}
      horizontal
      autoResize
      preventDefaultOnDrag
    >
      {loading
        ? total.map((value: number) => {
            return (
              <div
                key={value}
                className="sm:h-60 h-40 w-28 sm:w-48 p-7 bg-gray-700 mr-2 flex justify-center items-center rounded-2xl"
              >
                <SyncLoader color="gray" />
              </div>
            );
          })
        : data.map((value: ResPonseData, index: number) => {
            return <MediumImage data={value} key={index} />;
          })}
      <Link
        to={`/movies/${navigateURL}`}
        className="flex justify-center items-center w-[15%] font-lora sm:text-xl text-sky-400 font-bold hover:border-2 rounded-2xl hover:border-sky-400 transition-all"
      >
        See All
      </Link>
      <ViewportSlot>
        <button className="flicking-arrow-next"></button>
        <button className="flicking-arrow-prev"></button>
      </ViewportSlot>
    </Flicking>
  );
};
export default CarouselMShow;
