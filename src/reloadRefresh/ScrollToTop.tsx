import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGSelector } from "../redux/Store";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { q } = useGSelector((state) => state.data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, q]);
  return <div></div>;
};

export default ScrollToTop;
