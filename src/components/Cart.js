import React from "react";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(data);
  return (
    <>
      <h1>Cart Items -- {data.length}</h1>
      <button onClick={handleClearCart}>Clear Cart</button>
      {data.map((data) => {
        return (
          <div className="col-md-3" key={data.id}>
            <div className="wsk-cp-product">
              <div className="wsk-cp-img">
                <img
                  src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    data.imageId
                  }
                  alt="Product"
                  className="img-responsive"
                />
              </div>
              <div className="wsk-cp-text">
                <div className="title-product">
                  <h3>{data.name}</h3>
                </div>
                <div className="description-prod">
                  <p>{data.description}</p>
                </div>
                <div className="card-footer">
                  <div className="wcf-left">
                    <span className="price">{data.price / 100}</span>
                  </div>
                  <div className="wcf-right">
                    <span className="price">{data.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
