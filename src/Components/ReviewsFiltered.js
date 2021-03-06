import { useState, useEffect } from "react";
import { fetchReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

function ReviewsFiltered() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    fetchReviews(category).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) return <p>... loading</p>;
  return (
    <main className="review-list">
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </main>
  );
}

export default ReviewsFiltered;
