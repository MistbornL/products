import React from "react";
import { Menu } from "../components/Menu";
import comingSoon from "../assets/comingsoon.jpg";
import { Link } from "react-router-dom";

export const Customers = () => {
  return (
    <div className="app">
      <header>
        <Menu />
      </header>
      <main className="main">
        <h1>Customers Page</h1>
        <div
          style={{ margin: "0" }}
          className="container d-flex mt-5 justify-content-between align-items-center w-50"
        >
          <img
            style={{ width: "400px", height: "350px" }}
            src={comingSoon}
            alt="comingSoon"
          />
          <Link style={{ textDecoration: "none" }} to={"/"}>
            Back To Products
          </Link>
        </div>
      </main>
    </div>
  );
};
