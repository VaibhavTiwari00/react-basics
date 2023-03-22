import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resMenu, setResMenu] = useState({});

  const [resRecommendedMenu, setResRecommendedMenu] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  console.log(Object.values(resMenu).length);
  async function getRestaurantInfo() {
    data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    json = await data.json();
    console.log(json.data);
    setResMenu(json?.data?.cards[0]?.card?.card?.info);
    setResRecommendedMenu(
      json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    );
  }
  console.log(resRecommendedMenu);
  return Object.values(resMenu).length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1>
        Restaurant Menu {id} : {resMenu?.name}
      </h1>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resMenu?.cloudinaryImageId
        }
        alt=""
      />
      <br></br>
      <address>Address:{resMenu?.locality + " " + resMenu?.areaName}</address>
      <p>Rating : {resMenu?.avgRating}</p>
      <h3>Recommended Post</h3>
      <ul></ul>
    </>
  );
};
export default RestaurantMenu;
