import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ReviewsList from "./Components/ReviewsList";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/reviews" element={<ReviewsList />} />
        </Routes>
      </div>
  );
}

export default App;
