import { ResPonseData, ResponseArray } from "../../Types";
import { ImageShow } from "../ImageShow";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { MdRectangle } from "react-icons/md";
import { CarouselsLoader } from "../CarouselsLoader";

export type ImageCarouselsProps = {
  data: ResponseArray;
  loading: boolean;
};

export const ImageCarousels = ({ data, loading }: ImageCarouselsProps) => {
  data = data.filter((value: ResPonseData) => value.backdrop_path != null);
  const total: number[] = [1, 2, 3, 4, 5];
  return (
    <Carousel
      autoPlay
      centerMode
      infiniteLoop
      showThumbs={false}
      transitionTime={2000}
      centerSlidePercentage={90}
      statusFormatter={() => {
        return "";
      }}
      className="sm:p-4 block mt-3"
      animationHandler={"slide"}
      renderArrowNext={(onClickHandler) => {
        return (
          <div className="absolute top-0 right-0 z-40 px-1 flex justify-center items-center content-center h-full">
            <button
              onClick={onClickHandler}
              className="h-[20%] px-3 hover:bg-black hover:opacity-50 transition-colors rounded-2xl "
            >
              <GrCaretNext color="white" size={20} />
            </button>
          </div>
        );
      }}
      renderArrowPrev={(onClickHandler) => {
        return (
          <div className="absolute top-0 left-0 z-40 px-1 flex justify-center items-center content-center h-full">
            <button
              onClick={onClickHandler}
              className="h-[20%] px-3 hover:bg-black hover:opacity-50 transition-colors rounded-2xl "
            >
              <GrCaretPrevious color="white" size={20} />
            </button>
          </div>
        );
      }}
      renderIndicator={(clickHandler, isSelected: boolean, index) => {
        return (
          <button
            type="button"
            onClick={clickHandler}
            key={index}
            className="mx-1"
          >
            {isSelected ? (
              <MdRectangle color="white" className="md:text-xl text-xs" />
            ) : (
              <MdRectangle className="opacity-50 text-black md:text-xl text-xs" />
            )}
          </button>
        );
      }}
      selectedItem={2}
    >
      {loading
        ? total.map((index) => {
            return (
              <CarouselsLoader
                key={index}
                outerboxStyle="h-1/2 shadow-2xl shadow-black"
                skeletonStyle="md:h-[300px] h-40"
              />
            );
          })
        : data.map((value: ResPonseData, index: number) => {
            return <ImageShow data={value} key={index} />;
          })}
    </Carousel>
  );
};
