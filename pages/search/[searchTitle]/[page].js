// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const Page = () => {
//   const router = useRouter();
//   const [changePage, setChangePage] = useState(1);

//   useEffect(() => {
//     const movieTitle = router.query.searchTitle;
//     console.log(movieTitle);
//     router.push({
//       pathname: "/search/[searchTitle]/[page]",
//       query: { searchTitle: movieTitle, page: changePage },
//     });
//   }, [changePage, router.query.searchTitle]);

//   return (
//     <button className="mt-40" onClick={() => setChangePage(changePage + 1)}>
//       test
//     </button>
//   );
// };

// export default Page;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useForm } from "react-hook-form";
import SearchList from "@/components/common/search.UI/SearchList";
import ReactPaginate from "react-paginate";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
const Page = () => {
  const router = useRouter();
  const [changePage, setChangePage] = useState(1);
  const [test, setTest] = useState(router.query.searchTitle);
  const [CheckFilm, setCheckFilm] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    router.push(
      `/search/${encodeURIComponent(test)}/${changePage}`,
      undefined,
      { shallow: true }
    );
  }, [changePage, test]);

  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/search/movie?api_key=97daa3077452cbe6f793644c1afc0868&query=${test}&include_adult=false&language=en-US&page=${changePage}`
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       }),
  // });
  // useEffect(() => {
  //   refetch();
  // }, [changePage, test]);

  const fetchMovie = async () => {
    return await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=97daa3077452cbe6f793644c1afc0868&query=${test}&include_adult=false&language=en-US&page=${changePage}`
    );
  };

  const fetchSeries = async () => {
    return await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=97daa3077452cbe6f793644c1afc0868&query=${test}&include_adult=false&language=en-US&page=${changePage}`
    );
  };

  const { data: movieData, refetch: refetchMovie } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovie,
  });
  const { data: serieData, refetch: refetchSerie } = useQuery({
    queryKey: ["serie"],
    queryFn: fetchSeries,
  });

  useEffect(() => {
    refetchMovie();
    refetchSerie();
  }, [changePage, test]);

  const onSubmit = (data) => {
    setTest(data.Search);
    setChangePage(1);
  };

  const handlePageClick = (event) => {
    setChangePage(event.selected + 1);
  };

  return (
    <div className="pt-16 flex flex-col w-full justify-center items-center">
      <div className="w-11/12 h-1px relative bg-indigo-500 mr-5 ml-5 mb-7 md:mb-12">
        <div className="w-2 h-2 bg-purple-500 rounded-full absolute -top-1 left-1/2"></div>
      </div>
      <h4 className="font-dela bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent text-xl mb-5 md:text-2xl">
        SEARCH RESULT - {test}
      </h4>
      <form
        className="flex flex-row justify-center items-center w-full pr-2 pl-2 gap-2 md:pr-16 md:pl-16 md:gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="bg-transparent border border-zinc-500 rounded-lg w-full h-11 text-white indent-3 font-mont outline-none focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-pink-500 placeholder:indent-3 placeholder:text-zinc-600 placeholder:text-sm md:placeholder:text-lg"
          type="text"
          placeholder="Search Your Movies and Series"
          {...register("Search")}
        />
        <input
          className="pl-4 pr-4 pt-2 pb-2 font-mont font-semibold text-sm md:text-base border border-white text-white rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block cursor-pointer"
          type="submit"
          value="SEARCH"
        />
      </form>
      <div className="w-full pt-3">
        <div className="flex gap-2 ml-2 md:ml-16">
          <p
            onClick={() => setCheckFilm(false)}
            className={`rounded-lg pl-3 pr-3 pt-1 pb-1 cursor-pointer ${
              CheckFilm
                ? "border text-zinc-700 border-zinc-700"
                : "border border-purple-400 bg-gradient-to-r from-purple-500 from-10 text-white transition-all"
            }`}
          >
            Movies {movieData?.data?.total_results}
          </p>
          <p
            onClick={() => setCheckFilm(true)}
            className={`rounded-lg pl-3 pr-3 pt-1 pb-1 cursor-pointer ${
              CheckFilm
                ? "border border-purple-400 bg-gradient-to-r from-purple-500 from-10 text-white transition-all"
                : "border text-zinc-700 border-zinc-700"
            }`}
          >
            Series {serieData?.data?.total_results}
          </p>
        </div>
      </div>

      <SearchList
        data={CheckFilm ? serieData?.data?.results : movieData?.data?.results}
        CheckFilm={CheckFilm}
      />
      {/* <button
        className="mt-40 text-white"
        onClick={() => setChangePage(changePage + 1)}
      >
        {test}
      </button> */}
      <ReactPaginate
        nextLabel={
          <BsArrowRightSquare className="text-white text-4xl ml-5 hover:text-indigo-500" />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={
          CheckFilm
            ? serieData?.data?.total_pages
            : movieData?.data?.total_pages
        }
        previousLabel={
          <BsArrowLeftSquare className="text-white text-4xl mr-5 hover:text-indigo-500" />
        }
        pageClassName="w-8 text-center mr-1 ml-1"
        pageLinkClassName="text-white text-lg font-mont"
        breakLabel={<PiDotsThreeOutlineLight className="text-white" />}
        containerClassName="flex flex-row justify-center items-center mt-40 mb-10"
        activeClassName="border border-purple-400 bg-gradient-to-r from-purple-500 from-10"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Page;
