import React, { useRef } from "react";

const scrollRef = () => {
  const Scrollref = useRef(null);
  const ScrollLeft = () => {
    Scrollref.current.scrollLeft += 500;
  };

  const ScrollRight = () => {
    Scrollref.current.scrollLeft -= 500;
  };

  return [Scrollref, ScrollLeft, ScrollRight];
};

export default scrollRef;
