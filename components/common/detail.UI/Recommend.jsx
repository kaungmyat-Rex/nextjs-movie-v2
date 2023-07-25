import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import scrollRef from "@/hooks/scrollRef";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import Link from "next/link";
export default function Recommend({ movieID, type }) {
  const [Scrollref, ScrollLeft, ScrollRight] = scrollRef();
  const fetchRecommend = async () => {
    return await axios.get(
      `https://api.themoviedb.org/3/${type}/${movieID}/recommendations?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US`
    );
  };

  const { data: recommendData, refetch } = useQuery({
    queryKey: ["recom"],
    queryFn: fetchRecommend,
  });

  useEffect(() => {
    refetch();
  }, [movieID]);

  if (recommendData?.data?.results.length === 0) {
    return <></>;
  }

  // console.log(recommendData);
  //   console.log(recommendData?.data?.results.slice(0, 10));
  return (
    <div className="mx-4 mt-32 mb-32 relative">
      <h4 className="flex items-center text-lg font-dela text-gray-300">
        MORE LIKE THIS <MdOutlineKeyboardArrowRight className="text-3xl" />
      </h4>
      <BsArrowLeftSquare
        onClick={() => ScrollRight()}
        className={` text-white absolute text-3xl top-[50%] -left-10 cursor-pointer hidden lg:block`}
      />
      <BsArrowRightSquare
        onClick={() => ScrollLeft()}
        className={` text-white absolute text-3xl top-[50%] -right-10 cursor-pointer hidden lg:block`}
      />
      <div
        ref={Scrollref}
        className="flex flex-row overflow-x-auto gap-4 mt-5 flex-shrink-0 scroll-smooth scrollbar-hide"
        style={{ flexWrap: "nowrap", overflowX: "auto" }}
      >
        {recommendData?.data?.results.slice(0, 10).map((e) => {
          return (
            <div
              key={e.id}
              className="w-[180px] h-640"
              style={{ flex: "0 0 auto" }}
            >
              <Link
                href={`${
                  e.media_type === "tv"
                    ? `/serieDetail/${e.id}`
                    : `/movieDetail/${e.id}`
                }`}
              >
                <img
                  className="w-full h-full object-cover rounded-lg border-2 border-zinc-500"
                  src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
