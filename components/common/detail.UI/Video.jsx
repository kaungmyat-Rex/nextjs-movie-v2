import React, { useEffect } from "react";
import Openmodel from "@/hooks/openModel";
import scrollRef from "@/hooks/scrollRef";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import YTmodel from "../reUse.UI/YTmodel";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
export default function Video({ movieID, type }) {
  //   const [openModel, openModelFun] = Openmodel();
  const [Scrollref, ScrollLeft, ScrollRight] = scrollRef();

  const fetchVideo = async () => {
    return await axios.get(
      `https://api.themoviedb.org/3/${type}/${movieID}/videos?api_key=97daa3077452cbe6f793644c1afc0868`
    );
  };

  const { data: videoData, refetch } = useQuery({
    queryKey: ["video"],
    queryFn: fetchVideo,
  });

  useEffect(() => {
    refetch();
  }, [movieID]);

  // console.log(videoData?.data?.results);

  return (
    <div className="mx-4 mt-32 relative">
      <h4 className="flex items-center text-lg font-dela text-gray-300">
        VIDEO <MdOutlineKeyboardArrowRight className="text-3xl" />
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
        {videoData?.data?.results.slice(0, 5).map((e) => {
          return (
            <div className="w-[330px] mr-4 lg:w-[400px]" key={e.key}>
              <iframe
                className="w-[330px] h-[230px] lg:w-[400px] lg:h-[330px] mr-4"
                src={`https://www.youtube.com/embed/${e.key}`}
                frameBorder="0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
