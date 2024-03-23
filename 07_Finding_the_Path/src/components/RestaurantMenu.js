import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import {
    swiggy_menu_api_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../constants";
//we will use this use params to catch the id of the restaurant

//useParams is a hook that allows you to access the URL parameters from within a component.

/**
 * Explanation:

1. Dynamic URL Parameters:

const params = useParams(); (using React Router): This line obtains the dynamic URL parameters from the current route.
const { id } = params; (destructuring): This extracts the id parameter specifically, assuming it's used to identify the restaurant.
2. State Management:

const [restaurant, setRestaurant] = useState(null); and const [menuItems, setMenuItems] = useState([]);: These lines declare two state variables using React's useState hook.
restaurant: Stores the fetched restaurant information.
menuItems: Stores an array of menu items.
Both are initialized with null and an empty array, respectively.
3. Data Fetching with useEffect:

useEffect(() => { getRestaurantInfo(); }, []);: This useEffect hook runs the getRestaurantInfo function only once, after the component mounts. This ensures the data is fetched only on initial load.
4. Asynchronous Data Fetching Function:

async function getRestaurantInfo(): This asynchronous function handles fetching restaurant data:
4.1. Fetch Data from API:
const data = await fetch(...);: Fetches data from the provided API endpoint, including the id parameter from URL parameters.
4.2. Parse JSON Response:
const json = await data.json();: Parses the fetched data as JSON.
4.3. Extract Restaurant Data (complex logic):
const restaurantData = ...;: This complex logic iterates through the nested JSON structure to extract the relevant restaurant information using specific conditions based on the API's data format. It sets the restaurant state with the extracted data.
 */



//The getRestaurantInfo function fetches the restaurant and menu data from the API using the provided id parameter. It then extracts the relevant information and updates the state variables accordingly.

/**
 * 1. Extracting Restaurant Data:

Think of the JSON data as a big box with many smaller boxes inside, each labeled.
This line digs through the boxes to find the specific card labeled "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant [invalid URL removed]".
It's like searching for a specific toy in a playroom full of boxes.
Once it finds the right card, it opens it and grabs the "info" card inside, which holds the restaurant's details.
It stores this info in the "restaurant" state variable, like putting the found toy in your backpack.
2. Extracting Menu Items:

This line does a similar treasure hunt, but for menu items.
It digs through different boxes to find the "REGULAR" card group, which holds the menu cards.
It filters out cards that aren't actual menu items (like instructions or dividers), keeping only those with "@type": MENU_ITEM_TYPE_KEY.
It then opens those cards, grabs the "itemCards" inside (like a bag of small toys), flattens them out (like spreading them on the floor), and takes the "info" card from each item card (like picking out each individual toy).
This gives it a list of all the menu items, which it stores in the "menuItemsData" variable.
3. Removing Duplicate Menu Items:

This line checks for any duplicate toys in the bag (menu items with the same "id").
It creates a new, empty bag called "uniqueMenuItems".
It goes through each toy in the original bag:
If it doesn't find the same toy in the new bag (based on its "id"), it adds it to the new bag.
This ensures only unique toys (menu items) end up in the new bag (uniqueMenuItems state variable).
4. Error Handling:

If something goes wrong during the treasure hunt (like a box is missing or broken), it handles the error gracefully.
It sets the "restaurant" state back to null (like saying "I couldn't find the toy").
It logs the error message to a notebook for later investigation (like writing down what went wrong).
It empties the "menuItems" state (like putting all the toys back in the playroom).
Key Points:

The code uses optional chaining (the question marks) to handle cases where some boxes might be empty or missing.
It uses chaining methods (like map and find) to navigate through the nested JSON structure efficiently.
The specific card names and structures are based on the API's data format, so understanding those details is crucial for working with this code effectively.
 *
 */
















const RestaurantMenu = () =>
{
    //how to read DYNAMIC URL PARAMS 
    const params = useParams();
    const {id} = params;
     
    


    // or you can onfly destructure it 

   // const {id} = useParams();

    const [restraunt , setRestraunt] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    //use effect hook ==> to fetch the data from the api

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
         


    async function getRestaurantInfo()
    {
        try{

          const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id);
          const json = await data.json();
          const restaurantData = json?.data?.cards?.map(x => x.card)?.
          find(x => x && x.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.info || null;
          setRestraunt(restaurantData);
          const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                              groupedCard?.cardGroupMap?.REGULAR?.
                              cards?.map(x => x.card?.card)?.
                              filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                              map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
        
          const uniqueMenuItems = [];
          menuItemsData.forEach((item) => {

            if (!uniqueMenuItems.find(x => x.id === item.id))
            {
              uniqueMenuItems.push(item);
            }
          });
          setMenuItems(uniqueMenuItems);
         }
         catch (error) {   
          setRestraunt(null);
          console.log(error);
          setMenuItems([]);  
          }
        }

/**
 * . Navigating the JSON Structure:

The code starts with json?.data?.cards, which attempts to access the cards array within the root data object of the parsed JSON response. The question mark (?) ensures that if data or cards is missing, the code doesn't throw an error.
It then uses .find(x => x.groupedCard) to find the first card within the cards array that has a property called groupedCard. This card likely holds information about different sections or groups within the data.
2. Accessing Menu Card Group:

If a groupedCard is found, the code extracts its cardGroupMap property, which might be a map or object containing various card groups.
It then specifically looks for the REGULAR card group using .REGULAR. This group presumably holds the regular menu items.
3. Filtering Menu Cards:

Within the REGULAR card group, the code accesses the cards array again.
It uses .map(x => x.card?.card) to iterate through each card and extract its nested card property (if it exists). This double .card is likely due to the specific structure of the API's data.
The .filter(x => x['@type'] === MENU_ITEM_TYPE_KEY) part filters the cards, keeping only those whose @type property matches MENU_ITEM_TYPE_KEY. This key likely identifies cards that represent actual menu items.
4. Extracting Item Cards and Information:

For the filtered cards, the code uses .map(x => x.itemCards) to extract the itemCards property, which might be an array containing detailed information about each menu item.
The .flat() method combines any potential nested arrays of itemCards into a single, flat array.
Finally, .map(x => x.card?.info) iterates through the flattened array and extracts the info property from each card (if it exists). This info property likely holds the actual details of each menu item.
In simpler terms:

Imagine the JSON data as a nested structure of boxes. The code navigates through these boxes, opening specific ones based on their labels and properties, to eventually reach the boxes containing individual menu items and extract their information.
 * 
 */

        
    return  (
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
