const RestaurantCard = ({ cloudinaryImageId, name, cuisines }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Avatar"
      />
      <div className="container">
        <h4>{name}</h4>
        <p>{cuisines.join(",")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
