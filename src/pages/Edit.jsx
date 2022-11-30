import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Data } from "../data/DummyData";

export const Edit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const name = useRef();
  const number = useRef();
  const color = useRef();
  const price = useRef();
  const [loading, setLoading] = useState(true);

  useState(() => {
    const filter = Data.filter((product) => {
      return product.id === parseInt(id);
    });
    setProduct(filter[0]);
  }, [product]);

  useEffect(() => {
    setLoading(false);
    if (loading === false) {
      name.current.value = product.name;
      number.current.value = product.number;
      color.current.value = product.color;
      price.current.value = product.listPrice;
    }
  }, [loading]);

  return (
    <div className="app">
      <header>
        <Menu />
      </header>
      <main className="main">
        <h1 style={{ borderBottom: "2px solid grey" }}>Edit Product</h1>

        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div style={{ width: "400px", margin: "0" }} className="container">
            <div className="form-outline d-flex justify-content-between  mb-3">
              <p>Name</p>
              <input
                ref={name}
                type="text"
                id="form12"
                className="form-control-sm"
              />
            </div>
            <div className="form-outline d-flex justify-content-between mb-3">
              <p>Product Number</p>
              <input
                ref={number}
                type="text"
                id="form12"
                className="form-control-sm"
              />
            </div>
            <div className="form-outline d-flex justify-content-between mb-3">
              <p>Color</p>
              <input
                ref={color}
                type="text"
                id="form12"
                className="form-control-sm"
              />
            </div>

            <div className="form-outline d-flex justify-content-between mb-3">
              <p>List Price</p>
              <input
                ref={price}
                type="text"
                id="form12"
                className="form-control-sm"
              />
            </div>

            <div className="d-flex justify-content-end mt-2">
              <button className="btn btn-success">Save</button>
              <button className="btn btn">Back To List</button>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
