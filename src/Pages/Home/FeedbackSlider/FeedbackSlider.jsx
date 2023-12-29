import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./FeedbackSlider.css";

const FeedbackSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedbacks(data);
        setLoad(!load);
      });
  }, [load]);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div>
      <h2 className="text-center font-bold text-2xl text-pink-600 mb-4">
        {" "}
        Our Customer Valuable Feedbacks
      </h2>
      <Slider {...settings} className="w-3/4 mx-auto slick pl-6 pr-6">
        {feedbacks.map((feedback) => (
          <div className=" text-center w-3" key={feedback._id}>
            <img
              className="w-32 mx-auto mb-2"
              src={
                feedback.url
                  ? feedback?.url
                  : "https://i.ibb.co/mH1ZxWq/user.png"
              }
            />
            <p className="italic">{feedback?.feedback}</p>
            <div className="divide-yellow-400 divide-y-2">
              <p className="mb-3"></p>
              <p className="font-bold">{feedback?.name}</p>
            </div>
            <p>{feedback?.profession}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
