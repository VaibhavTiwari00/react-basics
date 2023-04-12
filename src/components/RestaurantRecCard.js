import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantRecCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="col-md-3">
      <div className="wsk-cp-product">
        <div className="wsk-cp-img">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              item.card.info.imageId
            }
            alt="Product"
            className="img-responsive"
          />
        </div>
        <div className="wsk-cp-text">
          <div className="category">
            <button
              onClick={() => {
                handleAddItem(item.card.info);
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="title-product">
            <h3>{item.card.info.name}</h3>
          </div>
          <div className="description-prod">
            <p>{item.card.info.description}</p>
          </div>
          <div className="card-footer">
            <div className="wcf-left">
              <span className="price">{item.card.info.price / 100}</span>
            </div>
            <div className="wcf-right">
              <span className="price">{item.card.info.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantRecCard;
