import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://gugz-games.herokuapp.com/api",
});

export const fetchReviews = (category) => {
  console.log(category); 
  let queryString = "/reviews"
  if (category) queryString+= `?category=${category}`
  return gamesAPI.get(queryString) 
  
     
    .then(({ data }) => {
      return data.reviews;
    });
};

export const fetchCategories = () => {
  return gamesAPI.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const fetchReviewsById = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const patchVotes = (review_id, inc_votes) => {
  return gamesAPI
    .patch(`/reviews/${review_id}`, { inc_votes: inc_votes })
    .then(({ data }) => {
      return data.review;
    });
};