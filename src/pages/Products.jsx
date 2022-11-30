import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Data } from "../data/DummyData";

export const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <main className="main">
        <div className="mb-2 d-flex justify-content-between">
          <h1>Products</h1>
          <button className="btn btn-primary">show filter</button>
        </div>

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
            {Data.map((product) => {
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
                    <button className="btn btn-danger">delete</button>
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
