import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo } from "../components/Info/Data";

const Home = () => {
  return (
    <>
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
    </>
  );
};

export default Home;
