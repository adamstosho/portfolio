"use client";
import { useState } from "react";

const Rating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
    if (onRatingChange) {
      onRatingChange(starValue);
    }
  };
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleStarClick(star)}
          className={`lg:scale-1 scale-90 text-xl cursor-pointer focus:outline-none ${
            star <= rating ? "text-primary1" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default Rating;
