import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resMenu, setResMenu] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=316613&submitAction=ENTER"
    );
    json = await data.json();
    console.log(json.data);
    setResMenu(json.data.cards[0].card.card.info);
  }
  return (
    <>
      <h1>Restaurant Menu id : {resMenu.name}</h1>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resMenu.cloudinaryImageId
        }
        alt=""
      />
      <address>{resMenu.areaName}</address>
    </>
  );
};
export default RestaurantMenu;
