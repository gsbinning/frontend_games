import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://gugz-games.herokuapp.com/api",
});

export const fetchReviews = () => {
  return gamesAPI.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};
