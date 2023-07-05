import { AiOutlineClose } from "react-icons/ai";
const YTmodel = ({ Trailar, setOpenModel }) => {
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-modelbg flex justify-center items-center backdrop-blur-lg">
      <div className="max-w-3xl w-full h-80 relative md:h-96 lg:h-420">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${Trailar}`}
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <AiOutlineClose
          onClick={() => setOpenModel(false)}
          className="text-white absolute -top-10 right-4 text-4xl"
        />
      </div>
    </div>
  );
};

export default YTmodel;
