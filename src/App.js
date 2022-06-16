import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";
import Categories from "./Components/Categories";
//import ReviewsFiltered from "./components/ReviewsFiltered";
//import dataLoop from "./components/video/dataLoop.mp4";
import SingleReview from "./Components/SingleReview";

function App() {
  return (
    <div className="App">
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate( -50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={dataLoop} type="video/mp4" />
      </video> */}
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
