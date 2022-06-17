import { Link } from "react-router-dom";
import Styling from "./Styling.css"

function ReviewCard({ review }) {
  return (
    <li className="review-card">
      <img
        className="img-list"
        src={review.review_img_url}
        alt={review.title}
      />
      <h3>{review.title}</h3>
      <h4>{review.owner}</h4>
      <h4>Votes: {review.votes}</h4>
      <h4>Comments: {review.comment_count}</h4>
      <p>{review.category}</p>
      <Link to={`/reviews/${review.review_id}`}>Read Full Review</Link>
    </li>
  );
}

export default ReviewCard;
