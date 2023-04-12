import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/fun.util";
import UserContext from "../utils/UserContext";

const BodyLayout = () => {
  const [searchText, setSearchText] = useState("");
  const [allrestaurant, setAllrestaurant] = useState([]);
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);
  const { user, setUser } = useContext(UserContext);

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
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="text"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div>
      <main>
        {filteredrestaurant.length === 0 ? (
          <p>No Data</p>
        ) : (
          filteredrestaurant.map((restaurant) => {
            return (
              <Link
                to={"restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </main>
    </>
  );
};

export default BodyLayout;
