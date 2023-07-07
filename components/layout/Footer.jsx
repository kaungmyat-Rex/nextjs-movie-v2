import Image from "next/image";
import { scrollTop } from "@/hooks/scrolltoTop";
import { IoIosArrowDropupCircle } from "react-icons/io";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-12">
      <div className="w-11/12 h-1px relative bg-indigo-500 mr-5 ml-5 mb-7 md:mb-12">
        {/* <div className="w-2 h-2 bg-purple-500 rounded-full absolute -top-1 left-1/2"></div> */}
        <IoIosArrowDropupCircle
          onClick={() => scrollTop()}
          className="bg-indigo-500 rounded-full absolute -top-4 left-1/2 -translate-x-2/4 text-3xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-center items-start w-11/12 lg:flex-row lg:items-center">
        <div className="mt-11 lg:flex-1">
          <h4 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent font-cherry text-3xl">
            MRML
          </h4>
          <p className="font-mont text-zinc-400 text-base mt-2">
            movie reviews with myanmar language
          </p>
        </div>
        <div className="mt-11 lg:flex-1">
          <h4 className="font-dela bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  inline-block bg-clip-text text-transparent text-xl">
            Developer
          </h4>
          <p className="font-mont text-zinc-400 text-base mt-2 lg:w-3/4">
            Developer and Design by{" "}
            <a
              className="text-white text-lg"
              href="https://kaungmyat.netlify.app/"
            >
              KaungMyat
            </a>
            {""} with NextJs and Tmdb Api
          </p>
        </div>
        <div className="flex mt-11 pb-9 lg:flex-1 lg:pb-0 items-center justify-center">
          <Image
            src={
              "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            }
            width={100}
            height={100}
            alt="tmdbLOGO"
          />
          <p className="text-white font-mont text-sm pl-8">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
