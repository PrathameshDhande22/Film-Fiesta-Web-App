import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type CarouselsLoaderProps = {
  outerboxStyle: string;
  skeletonStyle: string;
};

export const CarouselsLoader = ({
  outerboxStyle,
  skeletonStyle,
}: CarouselsLoaderProps) => {
  return (
    <div className={outerboxStyle}>
      <Skeleton className={skeletonStyle}></Skeleton>
    </div>
  );
};
