import AboutInfo from "@/components/common/detail.UI/AboutInfo";
import BgMain from "@/components/common/detail.UI/BgMain";
import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Cast from "@/components/common/detail.UI/Cast";
import Video from "@/components/common/detail.UI/Video";
import Openmodel from "@/hooks/openModel";
import Recommend from "@/components/common/detail.UI/Recommend";

export async function getServerSideProps(context) {
  const { query } = context;

  const movieData = await axios
    .get(
      `https://api.themoviedb.org/3/tv/${query.serieID}?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US`
    )
    .then((res) => res.data);

  return {
    props: {
      movieData: movieData,
      movieID: query.serieID,
    },
  };
}

function MovieDetail({ movieData, movieID }) {
  const [openModel, openModelFun] = Openmodel();
  //   console.log(castData);
  //   const fetchCastData = async () => {
  //     return await axios.get(
  //       `https://api.themoviedb.org/3/tv/${movieID}/credits?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US`
  //     );
  //   };

  //   const { data: CastData } = useQuery({
  //     queryKey: ["Cast"],
  //     queryFn: fetchCastData,
  //   });

  //   console.log(movieData);

  return (
    <div className="w-full">
      <BgMain Data={movieData} type="tv" />
      <div className="lg:mx-28">
        <AboutInfo infoData={movieData} />
        <Cast movieID={movieID} type="tv" />

        <Video movieID={movieID} type="tv" />
        <div className="w-11/12 h-1px relative bg-indigo-500 mr-5 ml-5 mb-24 md:mb-12 mt-20">
          <div className="w-2 h-2 bg-purple-500 rounded-full absolute -top-1 left-1/2"></div>
        </div>
        <Recommend movieID={movieID} type="tv" />
      </div>
    </div>
  );
}

export default MovieDetail;
