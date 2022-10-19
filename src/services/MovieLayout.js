import React from "react";
import { Link, Outlet } from "react-router-dom";

function MovieLayout() {
  return (
    <>
      <Link to="1">Movie 1</Link> <br />
      <Link to="2">Movie 2</Link>
      <br />
      <Link to="3">Movie 3</Link>
      <Outlet context={{ hello: "World" }} />
    </>
  );
}

export default MovieLayout;
