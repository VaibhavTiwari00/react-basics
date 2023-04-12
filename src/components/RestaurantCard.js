import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines }) => {
  const { user } = useContext(UserContext);
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
        <p style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</p>
        <p>{user.name}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
