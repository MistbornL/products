import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Data } from "../data/DummyData";

export const Products = () => {
  const navigate = useNavigate();
  const [isFilter, setIsFilter] = useState(false);
  const [table, setTable] = useState(Data);
  const name = useRef();
  const priceFrom = useRef();
  const priceTo = useRef();

  const filterLogic = () => {
    if (
      name.current.value &&
      priceFrom.current.value === "" &&
      priceTo.current.value === ""
    ) {
      setTable(
        table.filter((data) => {
          return data.name
            .toLowerCase()
            .includes(name.current.value.toLowerCase());
        })
      );
    } else if (name.current.value && priceFrom.current.value >= 1000) {
      setTable(
        table.filter((data) => {
          return (
            data.name
              .toLowerCase()
              .includes(name.current.value.toLowerCase()) &&
            data.listPrice >= 1000
          );
        })
      );
    } else if (name.current.value && priceFrom.current.value <= 1000) {
      setTable(
        table.filter((data) => {
          return (
            data.name
              .toLowerCase()
              .includes(name.current.value.toLowerCase()) &&
            data.listPrice <= 1000
          );
        })
      );
    } else if (priceFrom.current.value >= 1000) {
      setTable(
        table.filter((data) => {
          return data.listPrice >= 1000;
        })
      );
    } else if (priceFrom.current.value <= 1000) {
      setTable(
        table.filter((data) => {
          return data.listPrice <= 1000;
        })
      );
    }
  };
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <main className="main">
        <div className="mb-2 d-flex justify-content-between">
          <h1>Products</h1>
          <button
            onClick={() => setIsFilter(!isFilter)}
            style={{ background: "white", color: "grey" }}
            className="btn btn-primary"
          >
            show filter
          </button>
        </div>
        {isFilter ? (
          <div className="d-flex gap-1">
            <p>Name:</p>
            <input
              ref={name}
              style={{ width: "150px" }}
              className="form-control h-25 "
            />
            <p>and price between:</p>
            <input ref={priceFrom} className="form-control h-50 w-25" />
            <p>and</p>
            <input ref={priceTo} className="form-control h-50 w-25" />
            <button
              onClick={filterLogic}
              style={{ background: "white", color: "grey" }}
              className="btn btn-primary"
            >
              Apply
            </button>
          </div>
        ) : null}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Number</th>
              <th scope="col">Color</th>
              <th scope="col">List Price</th>
              <th scope="col">Modified Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {table.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.name}</th>
                  <td>{product.number}</td>
                  <td>{product.color}</td>
                  <td>{product.listPrice}</td>
                  <td>{product.modifiedDate}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/edit/${product.id}`);
                      }}
                      style={{ background: "grey" }}
                      className="btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        navigate(`/delete/${product.id}`);
                      }}
                      className="btn btn-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn btn-primary">Create New Product</button>
      </main>
    </div>
  );
};
