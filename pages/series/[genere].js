import InputGlo from "@/components/common/reUse.UI/InputGlo";
import SearchList from "@/components/common/search.UI/SearchList";
import axios from "axios";
import { useRouter } from "next/router";
import { seriesCategoryList } from "../../constants/commonObj";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import SeriesGenreList from "@/components/common/series.UI/seriesGenreList";
import SeriesList from "@/components/common/series.UI/SeriesList";
const SeriesGenere = () => {
  const router = useRouter();

  const [pageNo, setPageNo] = useState(1);

  let genereRoutes = router.query.genere;
  const filterRoutes = seriesCategoryList
    .filter((e) => e.title === genereRoutes)
    .map((e) => e.url)[0];

  //   console.log(
  //     movieCategoryList
  //       .filter((e) => e.title === genereRoutes?.toLocaleLowerCase())
  //       .map((e) => e.url)[0]
  //   );
  //   useEffect(() => {
  //     setFilterGenre(
  //       movieCategoryList
  //         .filter((e) => e.title === genereRoutes)
  //         .map((e) => e.title)[0]
  //     );
  //   }, [router.query.genere]);
  //   console.log(filterRoutes);

  const Fetchmovie = async () => {
    return await axios.get(
      `https://api.themoviedb.org/3/${filterRoutes}&page=${pageNo}`
    );
  };

  const { data, refetch } = useQuery({
    queryKey: ["genre"],
    queryFn: Fetchmovie,
  });

  useEffect(() => {
    setPageNo(1);
  }, [filterRoutes]);

  useEffect(() => {
    refetch();
  }, [filterRoutes, pageNo]);

  const handlePageClick = (event) => {
    setPageNo(event.selected + 1);
  };

  // useEffect(() => {
  //   refetch();
  //   setnewData(data?.data?.results);
  //   let newpage = genreData.concat(newData);
  //   console.log(newpage);
  // }, [pageNo]);

  // useEffect(() => {
  //   if (pageNo === 1) {
  //     setGenreData(data?.data?.results);

  //   } else {
  //     let pagenew = genreData.concat(data?.data?.results);
  //     setnewData(pagenew);
  //   }
  // }, [pageNo, data?.data?.results]);
  // console.log(newData);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-11/12 h-1px relative bg-indigo-500 mr-5 ml-5 mb-7 md:mb-12 mt-16">
        <div className="w-2 h-2 bg-purple-500 rounded-full absolute -top-1 left-1/2"></div>
      </div>
      <InputGlo />
      <div className="w-95% mt-3 md:w-11/12">
        <h4 className="text-white font-dela text-lg">Genere</h4>
        {/* <GenereListmenu genereRoutes={genereRoutes} /> */}
        <SeriesGenreList genereRoutes={genereRoutes} />
      </div>
      <SeriesList data={data?.data?.results} />
      {/* <button className="text-white" onClick={() => setPageNo(pageNo + 1)}>
        Change page
      </button> */}
      <ReactPaginate
        nextLabel={
          <BsArrowRightSquare className="text-white text-4xl ml-5 hover:text-indigo-500" />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={200}
        previousLabel={
          <BsArrowLeftSquare className="text-white text-4xl mr-5 hover:text-indigo-500" />
        }
        pageClassName="text-center mr-1 ml-1"
        pageLinkClassName="text-white text-lg font-mont"
        breakLabel={<PiDotsThreeOutlineLight className="text-white" />}
        containerClassName="flex flex-row justify-center items-center mt-40 mb-10"
        activeClassName="border border-purple-400 bg-gradient-to-r from-purple-500 from-10 pr-2 pl-2"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default SeriesGenere;
