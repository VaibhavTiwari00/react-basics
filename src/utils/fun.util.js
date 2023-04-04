export function filterData(searchText, allrestaurant) {
  const filteredData = allrestaurant.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}
