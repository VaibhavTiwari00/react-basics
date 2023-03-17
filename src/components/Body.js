import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const BodyLayout = () => {
  const [searchText, setSearchText] = useState("");

  const [allrestaurant, setAllrestaurant] = useState([]);
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllrestaurant(json.data.cards[2].data.data.cards);
    setFilteredrestaurant(json.data.cards[2].data.data.cards);
  }
  console.log("render");

  function filterData(searchText, allrestaurant) {
    const filteredData = allrestaurant.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText)
    );
    return filteredData;
  }

  return allrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-div">
        <input
          type="text"
          className="search-inp"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          type="button"
          onClick={() => {
            const data = filterData(searchText, allrestaurant);
            setFilteredrestaurant(data);
            console.log(data);
          }}
        >
          Submit
        </button>
      </div>
      <main>
        {filteredrestaurant.length === 0 ? (
          <p>No Data</p>
        ) : (
          filteredrestaurant.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </main>
    </>
  );
};

export default BodyLayout;
