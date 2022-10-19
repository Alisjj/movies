import React from "react";
import { Routes, Route } from "react-router-dom";
import AddReview from "../components/AddReview";
import Movie from "../components/Movie";
import MovieLayout from "../services/MovieLayout";
import MovieList from "../components/MovieList";

function MoviesRoutes() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<MovieList />} />
          <Route path=":id" element={<Movie />} />
          <Route path=":id/review" element={<AddReview />} />
        </Route>
      </Routes>
    </>
  );
}

export default MoviesRoutes;
