import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import scrollRef from "@/hooks/scrollRef";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Cast({ movieID, type }) {
  const [Scrollref, ScrollLeft, ScrollRight] = scrollRef();

  const fetchCastData = async () => {
    return await axios.get(
      `https://api.themoviedb.org/3/${type}/${movieID}/credits?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US`
    );
  };

  const { data: CastData, refetch } = useQuery({
    queryKey: ["Cast"],
    queryFn: fetchCastData,
  });

  useEffect(() => {
    refetch();
  }, [movieID]);

  return (
    <div className="mx-4 mt-32 relative">
      <h4 className="flex items-center text-lg font-dela text-gray-300">
        THE CAST <MdOutlineKeyboardArrowRight className="text-3xl" />
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
        className="flex flex-row gap-4 overflow-x-auto mt-5 scroll-smooth scrollbar-hide"
      >
        {CastData?.data?.cast.slice(0, 15).map((cast) => {
          return (
            <div className="flex flex-col" key={cast.id}>
              <div className="w-32 h-36">
                <img
                  src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt="cast_poster"
                  className="w-32 h-36 object-cover rounded-lg border border-zinc-500"
                />
              </div>
              <p className="text-white font-mont text-base mt-2">{cast.name}</p>
              <p className="text-white font-mont text-xs opacity-[0.6]">
                {cast.character}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
