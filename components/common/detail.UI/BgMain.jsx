import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import YTmodel from "../reUse.UI/YTmodel";
import axios from "axios";
export default function BgMain({ Data, type }) {
  const [Trailar, setTrailar] = useState([]);
  // const [openModel, openModelFun] = Openmodel();
  const [ytModel, setYtModel] = useState(false);

  const GetTrailar = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/${Data?.id}/videos?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US`
      )
      .then((res) => {
        // const filtervideo = res.data.results.filter(
        //   (e) =>
        //     e.name.toLowerCase().includes("official trailer") &&
        //     e.official === true
        // );
        // setTrailar(filtervideo.slice(0, 1));
        const filtervideo = res.data.results.filter(
          (item) => item?.type === "Trailer" && item?.official === true
        );

        setTrailar(filtervideo?.slice(0, 1)[0].key);
        setYtModel(true);
      });
  };

  // console.log(Data?.id);

  return (
    <>
      <main className="relative w-full lg:h-[650px]">
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <img
          className="w-full object-cover object-center lg:h-[600px] sm:hidden"
          src={`https://image.tmdb.org/t/p/original${Data?.poster_path}`}
          alt=""
        />
        <img
          className="w-full object-cover object-center lg:h-[650px] hidden sm:block"
          src={`https://image.tmdb.org/t/p/original${Data?.backdrop_path}`}
          alt=""
        />
        <div className="flex flex-col justify-center items-start absolute top-[50%] left-5 bottom-0 sm:bottom-[50%] sm:left-9 sm:w-[40%] lg:left-32">
          <h4 className="font-dela text-white text-xl sm:text-4xl">
            {Data?.original_title?.toUpperCase()}
            {Data?.original_name?.toUpperCase()}
          </h4>
          <div className="flex flex-row text-white text-sm mt-2 font-sans font-medium items-center sm:mt-7">
            <p className="mr-2">
              {Data?.release_date}
              {Data?.first_air_date}
            </p>
            |<p className="ml-2 mr-2">{Data?.original_language}</p>|
            <p className="ml-2 mr-2">
              {Data?.genres?.slice(0, 1).map((e) => e.name)}
            </p>
            |
            <p className="bg-gradient-to-r from-purple-500 to-pink-500 inline-block rounded-sm pl-2 pr-2 pt-1 pb-1 font-extrabold text-black ml-2">
              {Data?.vote_average?.toFixed(1).substring(0, 3)}
            </p>
          </div>
          <p className="text-gray-50 font-mont mt-3 font-semibold text-sm sm:text-lg sm:mt-3">
            {Data?.tagline
              ? Data?.tagline
              : "Tagline not required so , just tag whatever you like"}
          </p>
          <div className="flex flex-row gap-5 mt-4 sm:mt-8">
            <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex gap-2 font-mont font-semibold items-center  rounded-md pt-2 pb-2 pl-6 pr-6 border-2 sm:border border-white sm:border-gray-300 cursor-pointer">
              {" "}
              <FaPlay />
              <Link
                href={`https://channelmyanmar.org/${
                  Data?.original_title?.replace(/\s+/g, "-") ||
                  Data?.name?.replace(/\s+/g, "-")
                }`}
              >
                {" "}
                <h1>WATCH</h1>
              </Link>
            </span>
            <p
              onClick={() => GetTrailar()}
              className="font-mont font-semibold rounded-md pt-2 pb-2 pl-8 pr-8 border-2 sm:border border-white sm:border-gray-300 text-white cursor-pointer hover:bg-white hover:opacity-50 hover:text-black transition-all"
            >
              TRAILER
            </p>
          </div>
        </div>
      </main>
      <div className={`${ytModel ? "block" : "hidden"} z-30`}>
        <YTmodel Trailar={Trailar} setOpenModel={setYtModel} />
      </div>
    </>
  );
}
