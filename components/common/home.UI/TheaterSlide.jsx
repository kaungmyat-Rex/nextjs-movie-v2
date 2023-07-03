import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlinePlayCircle } from "react-icons/ai";
import axios from "axios";
import YTmodel from "../reUse.UI/YTmodel";
const TheaterSlide = ({ data3 }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [Trailar, setTrailar] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const settings = {
    arrows: false,
    asNavFor: nav2,
    autoplay: true,
    autoplaySpeed: 3000,

    ref: (slider1) => setNav1(slider1),
  };

  const GetTrailar = async (movieId) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US`
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
        setOpenModel(true);
      });
  };

  return (
    <div className="w-full h-96 flex flex-row justify-center items-center mt-16 sm:mt-36 md:mt-44">
      <div className={`${openModel ? "block" : "hidden"} z-30`}>
        <YTmodel Trailar={Trailar} setOpenModel={setOpenModel} />
      </div>
      <div className="w-full lg:w-3/4">
        <Slider
          {...settings}
          //   asNavFor={nav2}
          //   ref={(slider1) => setNav1(slider1)}
          //   arrows={true}
        >
          {data3.map((e) => (
            <div
              key={e.id}
              className="w-full h-auto relative lg:rounded-md lg:border border-zinc-700"
            >
              <div className="w-full h-full absolute left-0 top-0 bg-black opacity-40 lg:h-96"></div>
              <div
                className="absolute flex flex-col justify-center items-center left-1/2 top-30% -translate-x-1/2 text-white cursor-pointer"
                onClick={() => GetTrailar(e.id)}
              >
                <AiOutlinePlayCircle className="text-2xl" />
                <p className="text-base">Watch Trailar</p>
              </div>

              <img
                className="w-full object-cover h-72 sm:h-96 md:h-full lg:h-96"
                src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                alt="backdrop"
              />

              <div className="relative -top-3 flex flex-row bg-gradient-to-t from-black from-40 z-10 lg:bg-gradient-to-r lg:from-indigo-950 lg:from-10 lg:top-0">
                <img
                  className="w-32 sm:w-40 relative -top-14 left-5 rounded-md border"
                  src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                  alt="poster"
                />

                <div>
                  <h4 className="text-white font-dela ml-10 mt-7 text-base sm:text-xl">
                    {e.title.toUpperCase()}
                  </h4>
                  <p className="text-white font-mont text-sm sm:text-base ml-10 mt-1">
                    IMDB
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block font-dela pr-1 pl-1 rounded-md ml-2 text-black">
                      {e.vote_average.toFixed(1)}
                    </span>
                  </p>
                  <p className="text-zinc-300 font-mont ml-10 mt-2">
                    {e.release_date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block w-full lg:w-1/2">
        <h4 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent relative bottom-10 left-3 font-dela">
          UP NEXT
        </h4>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          verticalSwiping={true}
          vertical={true}
          arrows={false}
          autoplay={true}
          autoplaySpeed={3000}
          slidesToScroll={false}
          draggable={false}
        >
          {data3.map((e) => (
            <div
              key={e.id}
              className="w-full bg-gradient-to-r from-indigo-950 from-10 "
            >
              <div className="flex flex-row">
                <img
                  className="w-24 rounded-md ml-3"
                  src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                  alt="backdrop"
                />
                <div className="ml-4 flex flex-col items-start ">
                  <p className="text-white flex flex-row justify-center items-center font-mont text-sm mt-5">
                    <AiOutlinePlayCircle className="text-4xl mr-2" />
                    Trailar
                  </p>
                  <h4 className="text-white font-mont text-lg">
                    {e.title.toUpperCase()}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TheaterSlide;
