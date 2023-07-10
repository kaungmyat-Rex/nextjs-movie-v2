import { useState, useEffect } from "react";
import { LiaTrashSolid } from "react-icons/lia";
import Link from "next/link";
const RecentList = ({ localrecent, setInputmodel, deleteRecent }) => {
  //   const deleteRecent = (name) => {
  //     const filterRecent = localrecent?.filter((e) => e.name !== name);
  //     localStorage.setItem("recent", JSON.stringify(filterRecent));
  //     setInputmodel(false);
  //   };

  return (
    <div className="flex gap-3 mt-3">
      {localrecent?.map((e, index) => (
        <p
          className="flex justify-center items-center border border-zinc-400 rounded-2xl text-zinc-400 gap-4 pr-3 pl-4 pt-1 pb-1 hover:bg-gradient-to-r hover:from-indigo-500 hover:text-white"
          key={index}
        >
          <Link href={`search/[${e.name}]/1`}>
            {" "}
            <span className="text-lg " onClick={() => setInputmodel(false)}>
              {e.name}
            </span>
          </Link>
          <LiaTrashSolid
            onClick={() => deleteRecent(e.name)}
            className="text-2xl text-zinc-400 cursor-pointer hover:text-pink-500"
          />
        </p>
      ))}
    </div>
  );
};

export default RecentList;
