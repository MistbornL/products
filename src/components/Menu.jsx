import React from "react";

export const Menu = () => {
  return (
    <nav
      style={{
        padding: "0 240px",
        boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",
      }}
      className="mb-3 navbar navbar-expand-lg navbar-light bg-light"
    >
      <a
        className="navbar-brand"
        style={{ width: "200px", borderRight: "2px solid gray" }}
        href="#!"
      >
        Online Shop Admin
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Reports
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
