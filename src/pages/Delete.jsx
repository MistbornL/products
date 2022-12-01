import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Data } from "../data/DummyData";

export const Delete = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useState(() => {
    setLoading(false);
    const filter = Data.filter((product) => {
      return product.id === parseInt(id);
    });
    setProduct(filter[0]);
  }, [product]);

  return (
    <div className="app">
      <header>
        <Menu />
      </header>
      <main className="main">
        <div style={{ borderBottom: "1px solid grey" }} className="top">
          <h1>Confirm Delete Product</h1>
          <h2
            style={{
              background: "rgb(248,215,218)",
              padding: "15px",
              borderRadius: "3px",
            }}
          >
            Are you sure you want to delete the next product
          </h2>
        </div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div className="info w-25 mt-5">
            <div className=" d-flex justify-content-between align-items-center">
              <h4>ProductId</h4>
              <p>{product.id}</p>
            </div>
            <div className=" d-flex justify-content-between align-items-center">
              <h4>Name</h4>
              <p>{product.name}</p>
            </div>
            <div className=" d-flex justify-content-between align-items-center">
              <h4>ProductNumber</h4>
              <p>{product.number}</p>
            </div>
            <div className=" d-flex justify-content-between align-items-center">
              <h4>color</h4>
              <p>{product.color}</p>
            </div>
            <div className=" d-flex justify-content-between align-items-center">
              <h4>List Price</h4>
              <p>{product.listPrice}</p>
            </div>
            <div className="d-flex gap-2 bottom mt-5">
              <button className="btn btn-danger">Delete Product</button>
              <button onClick={() => navigate("/")} className="btn btn-primary">
                Cancel - Back To List
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
