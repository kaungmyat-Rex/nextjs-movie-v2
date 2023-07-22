import Slider from "react-slick";
import Loading from "../reUse.UI/Loading";

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

function DisplayNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const PopularListSlider = ({ data2 }) => {
  const settings = {
    className: "center",
    centerMode: true,

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          className: "",
          slidesToShow: 5,
          slidesToScroll: 5,
          centerMode: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SampleNextArrow />,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          className: "",
          slidesToShow: 4,
          slidesToScroll: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full transition-all">
      <Slider {...settings} className="">
        {data2?.map((e) => (
          <div key={e.id} className="relative w-72 flex cursor-pointer p-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
              alt="casual"
              className="rounded-2xl w-full relative border border-purple-500"
            />
            {/* <div className="absolute left-0 bottom-0 bg-gradient-to-t from-purple-950 from-10 w-full h-full"></div> */}
            {/* <h4 className="absolute left-2 -bottom-4 text-white text-xl">
              {e.media_type === "movie" ? e.title : e.name}
              <br />
              <span className="text-slate-300 text-sm ">
                {e.media_type === "movie" ? e.release_date : e.first_air_date}
              </span>
            </h4> */}
            <span className=" absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-lg rounded-full pl-2 pr-2 pt-2 pb-2 font-bold -top-0 -right-0 text-black">
              {e.vote_average.toFixed(1)}
              {/* {e.vote_average === Math.floor(e.vote_average) ? ".0" : ""} */}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularListSlider;
