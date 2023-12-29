import React, { useContext } from "react";
import Categories from "../ToysCategory/Categories";
import HomeBanner from "../HomeBanner/HomeBanner";
import ToyGallery from "../ToyGallery/ToyGallery";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <ToyGallery></ToyGallery>
      <Categories></Categories>
      <FeedbackForm></FeedbackForm>
    </div>
  );
};

export default Home;
