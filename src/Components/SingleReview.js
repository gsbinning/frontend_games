import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewsById } from "../utils/api";

function SingleReview() {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewsById(review_id).then((singleReview) => {
      setReview(singleReview);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <p>... loading</p>;
  return (
    <li className="review-page">
      <h3>{review.title}</h3>
      <h4>{review.owner}</h4>
      <h4>{review.created_at}</h4>
      <img
        className="review-img"
        src={review.review_img_url}
        alt={review.title}
      />
      <h4>Likes:{review.votes}</h4>
      <h4>Comments: {review.comment_count}</h4>
      <h4>{review.category}</h4>
      <h4>{review.designer}</h4>
      <p className="review-body">{review.review_body}</p>
    </li>
  );
}

export default SingleReview;
