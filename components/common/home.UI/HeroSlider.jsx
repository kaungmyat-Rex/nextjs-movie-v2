import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const HeroSlider = ({ data1 }) => {
  const settings = {
    dots: true,

    autoplay: true,
    fade: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="w-full m-0  pb-9 hidden sm:block">
      <Slider {...settings} className="w-full m-0">
        {data1?.map((e, index) => (
          <main className="relative w-full lg:h-528" key={e.id}>
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <img
              className="w-full object-cover object-center lg:h-528"
              src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
              alt=""
            />
            <div className="absolute top-30% left-1/2 -translate-x-2/4 flex flex-col justify-center items-center w-2/3 z-10">
              <p className="text-white font-cherry text-sm pb-5 text-center">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  inline-block text-lg w-7 h-7 rounded-full text-center border border-white">
                  {index + 1}
                </span>{" "}
                on tranding today.
              </p>
              <h4 className="text-white font-dela sm:text-lg  lg:text-2xl">
                {e.name?.toUpperCase() || e.title?.toUpperCase()}
              </h4>
              <p className="md:w-3/4 lg:w-2/4 font-mont text-white font-extralight text-sm mt-4 sm:hidden md:block">
                {e.overview?.slice(0, 200)} ...
              </p>

              <div className="flex flex-row gap-6 mt-8">
                <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex gap-2 font-mont font-semibold items-center  rounded-md pt-2 pb-2 pl-6 pr-6 border-2 border-white cursor-pointer">
                  {" "}
                  <FaPlay />
                  <h1>WATCH</h1>
                </span>
                <p className="font-mont font-semibold rounded-md pt-2 pb-2 pl-5 pr-5 border-2 border-white text-white cursor-pointer hover:bg-white hover:opacity-50 hover:text-black transition-all">
                  ABOUT FILM
                </p>
              </div>
            </div>
          </main>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
