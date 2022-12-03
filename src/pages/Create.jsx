import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Data } from "../data/DummyData";

export const Create = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const name = useRef();
  const number = useRef();
  const color = useRef();
  const price = useRef();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useState(() => {
    const filter = Data.filter((product) => {
      return product.id === parseInt(id);
    });
    setProduct(filter[0]);
  }, [product]);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const create = (e) => {
    e.preventDefault();
    Data.push({
      id: Data.length + 1,
      name: name.current.value,
      number: number.current.value,
      color: color.current.value,
      listPrice: price.current.value,
    });
    alert("added new product");
    navigate("/");
  };
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
          <form
            onSubmit={create}
            style={{ width: "700px" }}
            className="needs-validation mt-4"
          >
            <div className="form-outline d-flex justify-content-between  mb-3">
              <p>Name</p>
              <input
                required
                style={{ width: "300px" }}
                ref={name}
                type="text"
                className="form-control"
              />
            </div>
            <div className="invalid-feedback">Please fill out this field.</div>

            <div className="form-outline d-flex justify-content-between mb-3">
              <p>Product Number</p>
              <input
                required
                style={{ width: "300px" }}
                ref={number}
                type="text"
                id="form12"
                className="form-control"
              />
            </div>
            <div className="form-outline d-flex justify-content-between mb-3">
              <p>Color</p>
              <input
                required
                style={{ width: "300px" }}
                ref={color}
                type="text"
                id="form12"
                className="form-control"
              />
            </div>

            <div className="form-outline d-flex justify-content-between mb-3">
              <p>List Price</p>
              <input
                required
                style={{ width: "300px" }}
                ref={price}
                type="text"
                id="form12"
                className="form-control"
              />
            </div>

            <div className="d-flex justify-content-end mt-2 gap-2">
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button
                onClick={() => navigate("/")}
                className="btn btn-secondary"
              >
                Back To List
              </button>
              <button onClick={() => navigate("/")} className="btn btn-primary">
                Cancel
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};
