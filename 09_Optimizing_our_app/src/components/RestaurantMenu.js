import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../constants";
const RestaurantMenu = () =>
{
    //how to read DYNAMIC URL PARAMS 
    const params = useParams();
    const {id} = params;
   
    
//useRestaurant is a custom hook that fetches restaurant and menu data from the API based on the provided id.    
const data = useRestaurant(id);
const restraunt = data?.restraunt;
const menuItems = data?.menuItems;


        
    return !restraunt ? (<Shimmer/>):  (
        <div className="restaurant-menu">
          <div className="restaurant-summary">
            <img
              className="restaurant-img"
              src={IMG_CDN_URL + restraunt?.cloudinaryImageId}
              alt={restraunt?.name}
            />
            <div className="restaurant-summary-details">
              <h2 className="restaurant-title">{restraunt?.name}</h2>
              <p className="restaurant-tags">{restraunt?.cuisines?.join(", ")}</p>
              <div className="restaurant-details">
                <div className="restaurant-rating" style={
                (restraunt?.avgRating) < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : (restraunt?.avgRating) === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }>
                <i className="fa-solid fa-star"></i>
                  <span>{restraunt?.avgRating} </span>
                </div>
                <div className="restaurant-rating-slash">|</div>
                <div>{restraunt?.sla?.slaString}25 - 30 mins</div>
                <div className="restaurant-rating-slash">|</div>
                <div>{restraunt?.costForTwoMessage}</div>
              </div>
            </div>
          </div>
    
          <div className="restaurant-menu-content">
            <div className="menu-items-container">
              <div className="menu-title-wrap">
                <h3 className="menu-title">Recommended</h3>
                <p className="menu-count">
                  {menuItems.length} ITEMS
                </p>
              </div>
              <div className="menu-items-list">
                {menuItems.map((item) => (
                  <div className="menu-item" key={item?.id}>
                    <div className="menu-item-details">
                      <h3 className="item-title">{item?.name}</h3>
                      <p className="item-cost">
                        {item?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format((item?.price / 100))
                          : " "}
                      </p>
                      <p className="item-desc">{item?.description || "Restaurant Specials "}</p>
                    </div>
                    <div className="menu-img-wrapper">
                      {item?.imageId && (
                        <img
                          className="menu-item-img"
                          src={ITEM_IMG_CDN_URL + item?.imageId}
                          alt={item?.name}
                        />
                      )}
                      <button className="add-btn"> ADD +</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default RestaurantMenu;
