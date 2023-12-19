import React, { useContext } from "react";
import Categories from "../ToysCategory/Categories";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8">This is my home </h1>
      <Categories></Categories>
    </div>
  );
};

export default Home;
