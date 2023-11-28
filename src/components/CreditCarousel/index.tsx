import { CastAndCrew, Casts, Crews } from "../../Types";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import ProfileCard from "../ProfileCard";

interface CreditCarouselProps {
  title: "Cast" | "Crew";
  data: Casts | Crews;
}

export const CreditCarousel = ({ title, data }: CreditCarouselProps) => {
  const plugins: Arrow[] = [
    new Arrow({ moveCount: 3, moveByViewportSize: true }),
  ];

  return (
    <div className="px-4 space-y-5">
      <div className="space-x-2">
        <span className="font-meri text-g text-purple-400 select-none font-extrabold border-b-2  border-purple-400">
          {title}
        </span>
        <span className="font-mono text-xs font-black text-gray-300">
          {data.length}
        </span>
      </div>
      <Flicking
        align={"prev"}
        bound
        useFindDOMNode
        plugins={plugins}
        preventDefaultOnDrag={false}
        adaptive={false}
      >
        {data.map((value: CastAndCrew, index: number) => {
          return <ProfileCard key={index} people={value} />;
        })}
        <ViewportSlot>
          <button className="flicking-arrow-next is-thin"></button>
          <button className="flicking-arrow-prev is-thin"></button>
        </ViewportSlot>
      </Flicking>
    </div>
  );
};
