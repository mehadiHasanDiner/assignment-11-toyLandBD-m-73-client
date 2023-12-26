import React, { useContext } from "react";
import Categories from "../ToysCategory/Categories";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Categories></Categories>
    </div>
  );
};

export default Home;
