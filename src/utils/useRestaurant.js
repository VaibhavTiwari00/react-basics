import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [resMenu, setResMenu] = useState({});

  const [resRecommendedMenu, setResRecommendedMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    json = await data.json();

    setResMenu(json?.data?.cards[0]?.card?.card?.info);
    // json?.data?.cards[0]?.card?.card?.info
    console.log(json?.data);
    setResRecommendedMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    // restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    // ?.card?.itemCards
  }

  return [resMenu, resRecommendedMenu];
};

export default useRestaurant;
