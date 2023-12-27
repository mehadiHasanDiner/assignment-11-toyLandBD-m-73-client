import React, { useContext } from "react";
import Categories from "../ToysCategory/Categories";
import HomeBanner from "../HomeBanner/HomeBanner";
import ToyGallery from "../ToyGallery/ToyGallery";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <ToyGallery></ToyGallery>
      <Categories></Categories>
    </div>
  );
};

export default Home;
