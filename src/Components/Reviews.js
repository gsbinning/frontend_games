import { useState, useEffect } from "react";
import { fetchReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import MenuDropDown from "./MenuDropDown";
import { useParams } from "react-router-dom";
import Styling from "./Styling.css"

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const [userSelection, setUserSelection] = useState("");
 
  
  useEffect(() => {
      console.log(userSelection)
    fetchReviews(userSelection).then((reviewsFromAPI) => {
        console.log(reviewsFromAPI);
      setReviews(reviewsFromAPI);
      setIsLoading(false);
    });

  }, [userSelection]);

  if (isLoading) return <p>... loading</p>;
  return (
    <main>
        <MenuDropDown setUserSelection={setUserSelection}/>
      <ul className="review-list">

        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </main>
  );

}

export default Reviews;