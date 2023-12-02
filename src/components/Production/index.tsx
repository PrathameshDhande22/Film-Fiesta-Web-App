import { ProductionCompany } from "../../Types";
import noimage from "../../assets/noimage.png";
import { getImageURL } from "../../utils";
import lookup from "country-code-lookup";

interface ProductionProps {
  data: ProductionCompany[];
}

const Production = ({ data }: ProductionProps) => {
  return (
    <div className="mx-5 space-y-4">
      <div className="space-x-2" key={4}>
        <span
          key={1}
          className="font-meri text-g text-purple-400 select-none font-extrabold border-b-2  border-purple-400"
        >
          Production Company
        </span>
        <span key={2} className="font-mono text-xs font-black text-gray-300">
          {data.length}
        </span>
      </div>
      <div className="flex flex-row justify-start items-center gap-4 flex-wrap">
        {data.map((value: ProductionCompany, index: number) => {
          return (
            <div key={index} className="w-fit flex flex-row items-center gap-2">
              <img
                src={
                  value.logo_path != null
                    ? getImageURL(value.logo_path, "/w92")
                    : noimage
                }
                alt={`Image of ${value.name}`}
                className={`bg-slate-200 ${
                  value.logo_path == null
                    ? "md:w-32 w-16"
                    : "md:w-28 w-14 md:p-3 p-1 rounded-md"
                }`}
              />
              <div className="flex flex-col font-robonto">
                <span className="block text-sm md:text-base">{value.name}</span>
                <span className="md:text-sm text-gray-400 font-lora text-xs">
                  {lookup.byFips(value.origin_country)?.country}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Production;
