import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const naviagte = useNavigate();

  function navigateHandler() {
    naviagte("products");
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="products">Products Lists</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
