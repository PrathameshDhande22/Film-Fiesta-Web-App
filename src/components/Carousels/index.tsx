import { useEffect, useState } from "react";
import api from "../../api";
import { AxiosResponse } from "axios";
import { ApicallData, ResponseArray } from "../../Types";
import { ImageCarousels } from "../ImageCarousels";
import { UpcomingAnimation } from "../UpcomingAnimation";

export const Carousels = () => {
  const [data, setData] = useState<ResponseArray>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get("/movie/upcoming?language=en-US&page=1&region=IN")
      .then((res: AxiosResponse<ApicallData>) => {
        setData(res.data?.results);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        console.log("Some Error Occured");
      });
  }, []);

  return (
    <>
      <UpcomingAnimation />
      <ImageCarousels data={data} loading={loading} />
    </>
  );
};
