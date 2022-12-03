import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const edit = (e) => {
    e.preventDefault();
    const index = Data.findIndex((obj) => obj.id === parseInt(id));
    Data[index].name = name.current.value;
    Data[index].color = color.current.value;
    Data[index].number = number.current.value;
    Data[index].listPrice = price.current.value;
    console.log(Data);
  };

  const deleteItem = (e) => {
    e.preventDefault();
    const index = Data.findIndex((obj) => obj.id === parseInt(id));
    Data.splice(index, 1);
    alert("item is deleted");
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
            onSubmit={edit}
            style={{ width: "700px", margin: "0" }}
            className="container needs-validation mt-3"
          >
            <div className="form-outline d-flex justify-content-between  mb-3">
              <p>Name</p>
              <input
                required
                style={{ width: "300px" }}
                ref={name}
                type="text"
                id="form12"
                className="form-control"
              />
            </div>

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
              <button
                type="submit"
                onClick={deleteItem}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};
