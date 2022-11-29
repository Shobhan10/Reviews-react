import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    if (randomIndex === index) {
      if (randomIndex === reviews.length - 1) {
        randomIndex = index - 1;
      } else {
        randomIndex = index + 1;
      }
    }

    setIndex(randomIndex);
  };

  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        Surprise Me
      </button>
    </div>
  );
};

export default Review;
