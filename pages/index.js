import SearchInput from "@/components/common/home.UI/SearchInput";
import HeroSlider from "../components/common/home.UI/HeroSlider";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovieData } from "../store/MovieListSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PopularListSlider from "@/components/common/home.UI/PopularListSlider";
import GenereList from "@/components/common/home.UI/GenereList";
import { IoIosArrowForward } from "react-icons/io";
import TheaterSlide from "@/components/common/home.UI/TheaterSlide";
import { useQuery } from "@tanstack/react-query";
// export async function getServerSideProps(context) {
//   const { query } = context;

//   const PopularList = await axios.get(
//     `https://api.themoviedb.org/3/trending/${
//       query.type === "series" ? "tv" : "movie"
//     }/day?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US&page=1`
//   );

//   const data2 = PopularList.data.results;

//   return {
//     props: {
//       data2: data2,
//     },
//   };
// }
export async function getStaticProps() {
  const apiEndpoints = [
    `https://api.themoviedb.org/3/trending/all/day?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US&page=1`,

    `https://api.themoviedb.org/3/movie/now_playing?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US&page=1`,
  ];

  const apiResponses = await Promise.all(
    apiEndpoints.map((endpoint) => axios.get(endpoint))
  );

  const data1 = apiResponses[0].data.results;
  const data2 = apiResponses[1].data.results;
  // const data3 = apiResponses[2].data.results;

  return {
    props: {
      data1: data1.slice(0, 5),
      data2: data2.slice(0, 10),
      // data3: data3.slice(0, 10),
    },
    revalidate: 86400,
  };
}

export default function Home({ data1, data2 }) {
  const [routeCheck, setRouteCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const router = useRouter();

  const fetchMovieHero = async () => {
    return await axios.get(
      `https://api.themoviedb.org/3/trending/${
        routeCheck ? "tv" : "movie"
      }/day?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US&page=1`
    );
  };

  const { data: moviePopularData, refetch } = useQuery({
    queryKey: ["movieHero"],
    queryFn: fetchMovieHero,
  });

  // const fetchMovieTheater = async () => {
  //   return await axios.get(
  //     `https://api.themoviedb.org/3/movie/now_playing?api_key=97daa3077452cbe6f793644c1afc0868&language=en-US&page=1`
  //   );
  // };

  // const { data: movieTheaterData } = useQuery({
  //   queryKey: ["movieTheater"],
  //   queryFn: fetchMovieTheater,
  // });

  // useEffect(() => {
  //   if (!routeCheck) {
  //     router.push("", undefined, { scroll: false });
  //   } else {
  //     router.push("/?type=series", undefined, { scroll: false });
  //   }
  // }, [routeCheck]);

  useEffect(() => {
    refetch();
  }, [routeCheck]);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center relative">
      <HeroSlider data1={data1} />
      <div className="pt-32 pb-14 flex flex-col justify-center items-center sm:hidden">
        <h4 className="font-cherry text-5xl drop-shadow-3xl inline-block mix-blend-screen">
          MRML
        </h4>

        <p className="font-mont text-base text-zinc-200 pt-2">
          movie reviews with myanmar language
        </p>
        <SearchInput />
      </div>
      <div className="w-11/12 h-1px relative bg-indigo-500 mr-5 ml-5 mb-24 md:mb-12">
        <div className="w-2 h-2 bg-purple-500 rounded-full absolute -top-1 left-1/2"></div>
      </div>
      <div className="w-full md:w-4/5 flex flex-col justify-center items-center">
        <h4 className="font-dela bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent text-xl mb-5 md:text-2xl md:mb-7">
          POPULAR
        </h4>
        <div className="flex text-white text-base font-semibold mt-2 pb-9 font-mont">
          <p
            onClick={() => {
              setRouteCheck(false);
            }}
            className={`${
              routeCheck === false
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block"
                : ""
            } border border-indigo-400 rounded-sm pl-2 pr-2 pt-1 pb-1 cursor-pointer duration-75`}
          >
            Movies
          </p>
          <p
            onClick={() => {
              setRouteCheck(true);
            }}
            className={`${
              routeCheck === true
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block"
                : ""
            } border border-indigo-400 rounded-sm pl-3 pr-3 pt-1 pb-1  cursor-pointer duration-75`}
          >
            Series
          </p>
        </div>
        <PopularListSlider data2={moviePopularData?.data.results} />
      </div>
      <div className="w-11/12 mt-32 lg:w-4/5">
        <GenereList />
      </div>
      <div className="w-full pb-48 mt-28 lg:w-4/5 lg:pb-64">
        <h4 className="relative flex items-center text-white font-dela text-lg left-6 lg:left-0">
          IN THEATER
          <IoIosArrowForward />
        </h4>
        <TheaterSlide data2={data2} />
      </div>
    </main>
  );
}
