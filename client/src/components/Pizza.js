import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza = ({ item }) => {
  const dispatch = useDispatch();
  const [varients, setVarients] = useState("small");
  const [quantity, setQantity] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleMouse = (e) => {
    e.target.style.cursor = "pointer";
  };
  function addToCartItem() {
    dispatch(addToCart(item, quantity, varients));
  }

  return (
    <>
      <div className="header-container">
        <h1 onMouseOver={handleMouse} onClick={handleShow}>
          {item.name}
        </h1>
      </div>
      <div className="image-container">
        <img
          onClick={handleShow}
          onMouseOver={handleMouse}
          src={item.image}
          className="rounded img-fluid"
          alt={item.name}
          style={{ height: "200px", width: "250px", objectFit: "cover" }}
        />
      </div>

      <div className="flex-container">
        <div className="m-1 ">
          <p>Variants</p>
          <select
            className="form-control"
            onChange={(e) => setVarients(e.target.value)}
            value={varients}
          >
            {item.varients.map((i, k) => (
              <option key={k} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="m-1 ">
          <p>Quantity</p>
          <select
            className="form-control"
            onChange={(e) => setQantity(e.target.value)}
            value={quantity}
          >
            {[...Array(10).keys()].map((i, k) => (
              <option key={k} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-2 flex-container align-items-center">
        <div className="m-3 d-flex align-items-center">
          <h5>Price : {item.prices[0][varients] * quantity} $</h5>
        </div>
        <div>
          <button
            onClick={addToCartItem}
            className="ml-auto btn"
            style={{ marginTop: "-10px" }}
          >
            Add to cart
          </button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={item.image}
                className="rounded img-fluid"
                alt={item.name}
                style={{
                  height: "80%",
                  objectFit: "cover",
                }}
              />
            </div>
            <p style={{ marginTop: "15px" }}>{item.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Pizza;
