import React, { useEffect, useState } from "react";
import translate from "translate";
export default function AboutInfo({ infoData }) {
  //   const [language, setLanguage] = useState(false);

  const [selectLanguage, setSelectLanguage] = useState("English");
  const [translateText, setTranslateText] = useState("");
  const options = [
    { value: "Burmese", text: "Burmese" },
    { value: "English", text: "English" },
  ];

  translate.engine = "google";
  const translateFun = async () => {
    const Translatetext = await translate(infoData?.overview, "my");
    setTranslateText(Translatetext);
  };
  useEffect(() => {
    translateFun();
  }, [selectLanguage]);

  return (
    <div className="mx-4 mt-20 ">
      <h4 className="text-lg font-dela text-gray-300">ABOUT</h4>
      <div className="flex flex-col mt-7 gap-y-10 lg:flex-row lg:justify-center ">
        <div className="">
          <div className="flex flex-row text-gray-400">
            <span className="w-[30%] lg:w-[50%]">
              <p className="text-mont text-gray-300 font-semibold text-base mb-1">
                Date
              </p>
              <p>
                {infoData?.release_date}
                {infoData?.first_air_date}
              </p>
            </span>
            <span className="w-[30%] ml-5 lg:w-[50%]">
              <p className="text-mont text-gray-300 font-semibold text-base mb-1">
                Age
              </p>
              <p>{infoData?.adult ? "18+" : "PG-13"}</p>
            </span>
            <span className="w-[30%] ml-5 lg:w-[50%]">
              <p className="text-mont text-gray-300 font-semibold text-base mb-1">
                Country
              </p>
              <p>{infoData?.production_countries[0]?.name}</p>
            </span>
          </div>
          <div className="flex flex-row text-gray-400 mt-10">
            <span className="w-[30%]  break-words lg:w-[50%]">
              <p className="text-mont text-gray-300 font-semibold text-base mb-1">
                Revenue
              </p>
              <p className="">{infoData?.revenue} USDollar</p>
            </span>
            <span className="w-[30%] ml-5 lg:w-[50%]">
              <p className="text-mont text-gray-300 font-semibold text-base mb-1">
                Runtime
              </p>
              <p>{infoData?.runtime} Min</p>
            </span>
            <span className="w-[30%] ml-5 lg:w-[50%]">
              <p className="text-mont text-gray-300 font-semibold text-base mb-1">
                Genre
              </p>
              <p className="border w-fit px-2 py-1 rounded-lg border-gray-300">
                {infoData?.genres[0]?.name}
              </p>
            </span>
          </div>
        </div>
        <div className="mt-5 lg:w-[50%] lg:flex lg:flex-col lg:ml-14 lg:mt-0">
          <div className="lg:flex lg:items-center lg:gap-x-2">
            <p className="text-mont text-gray-300 font-semibold text-base">
              Description
            </p>
            <select
              className="bg-transparent border-2 border-white text-white rounded-md mt-4 lg:mt-0"
              placeholder="Language"
              onChange={(e) => setSelectLanguage(e.target.value)}
              value={selectLanguage}
            >
              {options.map((e) => (
                <option className="bg-black" key={e.value}>
                  {e.text}
                </option>
              ))}
            </select>
          </div>
          <p className="font-mont text-gray-400 text-base mt-3 lg:w-full">
            {selectLanguage === "English" ? infoData?.overview : translateText}
          </p>
        </div>
      </div>
    </div>
  );
}
