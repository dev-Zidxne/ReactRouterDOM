import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">Products Lists</Link>
      </p>
    </>
  );
}

export default HomePage;
