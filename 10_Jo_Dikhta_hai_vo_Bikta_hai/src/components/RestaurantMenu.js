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
        <div className="restaurant-menu mt-20 min-h-20 w-auto">
          <div className=" restaurant-img flex h-[200px] justify-center items-center bg-gray-950 text-white ">
            <img
              className="w-[250px]  h-[170px] rounded-md "
              src={IMG_CDN_URL + restraunt?.cloudinaryImageId}
              alt={restraunt?.name}
            />
            <div className="restaurant-summary-details flex flex-col basis-[520px] m-5">
              <h2 className="restaurant-title text-5xl max-w-xl font-light ">{restraunt?.name}</h2>
              <p className="restaurant-tags whitespace-nowrap text-inherit opacity-70 text-[15px] max-w-[540px]">{restraunt?.cuisines?.join(", ")}</p>
              <div className="restaurant-details flex justify-between items-center text-xs font-semibold text-inherit  max-w-[340px] mt-[18px] pb-2.5">
                <div className="restaurant-rating flex items-center gap-[5px]  bg-green-900 px-2 py-[5px] rounded-[5px] " style={
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
    
          <div className="restaurant-menu-content flex justify-center items-center bg-orange-50">
            <div className="menu-items-container flex flex-col justify-center  mt-7 w-[850px]">
              <div className="menu-title-wrap p-5">
                <h3 className="menu-title font-semibold text-2xl ">Recommended</h3>
                <p className="menu-coun mt-3 text-gray-900">
                  <span className="bg-green-300 font-normal rounded-md p-1" > {menuItems.length} ITEMS</span>
                 
                </p>
              </div>
              <div className="menu-items-list flex flex-col justify-center ">
                {menuItems.map((item) => (
                  <div className="menu-item flex  justify-between  p-3 border-b-[0.5px] border-black border-solid " key={item?.id}>
                    <div className="menu-item-details flex flex-col self-start w-1/2">
                      <h3 className="item-title font-serif font-medium ">{item?.name}</h3>
                      <p className="item-desc mt-[14px] w-2/5 text-black text-xs">{item?.description || "Restaurant Specials "}</p>
                      <p className="item-cost mt-1  text-gray-900 w-2/5">
                        {item?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format((item?.price / 100))
                          : " "}
                      </p>
                     
                    </div>
                    <div className="menu-img-wrapper flex flex-col justify-center items-end w-52 overflow-hidden">
                      {item?.imageId && (
                        <img
                          className="menu-item-img h-24 w-24 rounded-md"
                          src={ITEM_IMG_CDN_URL + item?.imageId}
                          alt={item?.name}
                        />
                      )}
                      <button className="add-btn bg-orange-600 p-1 cursor-pointer mt-2 rounded-md"> ADD +</button>
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
