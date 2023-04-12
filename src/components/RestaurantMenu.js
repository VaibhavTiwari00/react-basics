import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "../../assets/css/recBox.css";
import useRestaurant from "../utils/useRestaurant";
import RestaurantRecCard from "./RestaurantRecCard";
import ScrollToTop from "./ScrollTop";

const RestaurantMenu = () => {
  // getting id from url
  const { id } = useParams();

  // get data of resutarant from custom hook
  const [resDetails, resRecommendedMenu] = useRestaurant(id);

  console.log([resDetails, resRecommendedMenu]);
  return Object.values(resDetails).length == 0 ||
    resRecommendedMenu.length == 0 ? (
    <Shimmer />
  ) : (
    <ScrollToTop>
      <h1>
        Restaurant Menu {id} : {resDetails?.name}
      </h1>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resDetails?.cloudinaryImageId
        }
        alt=""
      />
      <br></br>
      <address>
        Address:{resDetails?.locality + " " + resDetails?.areaName}
      </address>
      <p>Rating : {resDetails?.avgRating}</p>
      <div className="container text-center">
        <h1> Recommended Post</h1>
      </div>

      <div className="shell">
        <div className="container">
          <div className="row">
            {resRecommendedMenu.map((item) => {
              return <RestaurantRecCard item={item} key={item.card.info.id} />;
            })}
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};
export default RestaurantMenu;
