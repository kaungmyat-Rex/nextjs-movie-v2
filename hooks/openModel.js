import React, { useState } from "react";

// export default function openModel() {
//   const [openModel, setOpenModel] = useState(false);

//   const openModelFun = (open) => {
//     setOpenModel(open);
//   };

//   return [openModel, openModelFun];
// }

// export const openModel = () => {
//   const [openModel, setOpenModel] = useState(false);

//   const openModelFun = (open) => {
//     setOpenModel(open);
//   };
//   return [openModel, openModelFun];
// };

const Openmodel = () => {
  const [openModel, setOpenModel] = useState(false);
  const openModelFun = (open) => {
    setOpenModel(open);
  };
  return [openModel, openModelFun];
};

export default Openmodel;
