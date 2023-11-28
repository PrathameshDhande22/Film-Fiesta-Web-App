import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { VideoFormat, VideoResults } from "../../Types";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import ReactPlayer from "react-player";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

interface VideosCarouselsProps {
  data: VideoResults;
}

const VideosCarousels = ({ data }: VideosCarouselsProps) => {
  const plugins: Arrow[] = [
    new Arrow({ moveCount: 1, moveByViewportSize: true }),
  ];

  return (
    <div className="px-4 space-y-4" key={1676}>
      <div className="space-x-2" key={4}>
        <span
          key={1}
          className="font-meri text-g text-purple-400 select-none font-extrabold border-b-2  border-purple-400"
        >
          Videos
        </span>
        <span key={2} className="font-mono text-xs font-black text-gray-300">
          {data.length}
        </span>
      </div>
      <>
        <Flicking
          align={"prev"}
          bound
          useFindDOMNode
          plugins={plugins}
          preventDefaultOnDrag={false}
          adaptive
          autoResize
        >
          {data.map((value: VideoFormat, index: number) => {
            return (
              <div className="mr-6" key={index}>
                <ReactPlayer
                  key={index}
                  url={`https://www.youtube.com/watch?v=${value.key}`}
                  controls
                  height={"200px"}
                  width={"370px"}
                  light
                  pip
                />
              </div>
            );
          })}
          <ViewportSlot>
            <button className="flicking-arrow-next is-circle"></button>
            <button className="flicking-arrow-prev is-circle"></button>
          </ViewportSlot>
        </Flicking>
      </>
    </div>
  );
};
export default VideosCarousels;
