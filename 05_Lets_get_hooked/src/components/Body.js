import restaurantList from "../Config.js";
import RestrauntCard from "./RestrauntCard.js";
import {useState} from "react"; //named variable import

// ==> What is state  why ?
//wehat is hook  why ? ==>It is just a normal function (which has a specific functionality ) that starts with use and it is used to create state variables
//what is usestate why ? 


//why do we needthis starte variable ==> to maintain the state of the variable and to re render the component when the value of the variable changes;
//react doews not know about our variables and their updation so when we want our variables to be sync ewith ui we use state variabbles and usestate hook to create them
// for example hmare pass ek a = 10 hai aur koi component use chnage krke 11 kr de ra toh agr nrmal variablehai toh reavct ko ptani chlega so time to time re render krta rhega but agr state variable hai toh react ko pta chlta hai ki ye variable change hua hai toh re render krta hai 

function filterData (searchText , restaurant){
  // const filtereddata =  restaurant.filter((restaurant) => restaurant.data.name.includes(searchText));
  //we want that ki jo search text hai vo bhi lowercase me aur jo restaurant name hai vo bhi lower case me toh we will use tolowercase function
  searchText = searchText.toLowerCase() ;
  const filtereddata =  restaurant.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText));
  //we also want to filter the data on the basis of cuisines
  const filtereddata2 =  restaurant.filter((restaurant) => restaurant.data.cuisines.join(",").toLowerCase().includes(searchText));
  //how can we merge so filter data and filterdaqta so that a user if type cuisine can also get answer
  //we can use spread operator to merge two arrays
  // WE WANT A FUNCTION THAT IF THAT SEARCH TEXT IS NOT PRESENT in then we should return "not found"; 

  
  if(filtereddata.length === 0 && filtereddata2.length === 0){
    return [{data : {name : "Not Found" , cuisines :"Not Found"  }}] ;

  }

  return [...filtereddata , ...filtereddata2] ;

  // return filtereddata ;

  //what is data type of filtereddata ==> array of objects

 

}



const Body = () => {
  // let searchText = "KFC"; //local variable in java script  aur isi me react me usestate("kfc") krte hain 

   //searchtxt is a local state variable 
   const [searchTxt , setSearchTxt ] = useState(); // new way of creating state variables  //this is how you create a local state variable in react 
//usestate function returns an array and first element of the array is the variable name (searchtxt) arraylooks like ==> [variableName , function to change the value of the variable]
   const  [restaurants , setRestaurantList] = useState(restaurantList); //by default restraunt list rhega 




    return (
      <>
      <div className = "search-container">
      <input type="text" className="search-input" placeholder="Search for restraunts" value = {searchTxt}
      //onchange is a function that is called when the value of the input field is changed ye update krne ke liye hota hai 
      onChange={(e) =>{
          // searchText = e.target.value  //Ye bhi work ni krega "e.target.value  ==> e stands for event and .target ==> ye vo data hai jo ki hmare search feild me type kiya jaa ra hai " }
          //How will it work ==> to make it work we cant use local variable let searchText = "KFC" we have to use React kind of variable ==> state variable to make it work
//bcz this statechage will re render the component and will change the value of searchtext and for maintaiining the state we have to use usestate hook

//Every componnent maintains its state and we can put  variables in the state and Every time you have to create a local variable we use state inside react. what is state ==> 
//suppose i have to create a local variable that maintains it state we will use state hook that can be imported from react using ==> import React, {useState} from "react" and then we can use it in our component
//useState is a function that returns an array and first element of the array is the variable name and second element is the function that is used to change the value of the variable     
    // searchTxt = e.target.value ; we cannot directly change this for this we have to use the function  "setSearchTxt" that is returned by usestate hook
    setSearchTxt(e.target.value) ;


    //jo bhi setSeacrch me ayega vo searchTxt me automatically update ho jayega
  }}
         
      />
      
      

      <button className="search-button"
      onClick={() => {
        //when on click need to filter the search FROM DATA  (restaurantList) aur filter krne ke baad we want to update the restaurants variable and we cant do it dorectly we have to use a state variable 
        //to mainrtain retaurnat list we use state variable


        //WHAT WE NEED TO FILTER ==> RESTAURANTs  USING SEARCH TEXT 
        const data = filterData(searchTxt , restaurants)   // this is a function that uses search text to filter data in restaurants and whatever we will get stored in data varaible and with that data variable is used to update my restaurant 
        //update the state ==> retaurants 
        setRestaurantList(data) ;

        
      }}
      
      
      
      
      >Search</button>
      </div>
      

{/* React uses one way data binding == > MEANS JO LET SEARCHTEXT HAI USME HMNE KFC DALA AUR VALUE = {SEARCH TEXT } IISSE YE IDHR SE TOH CHANGE HOKE SEARCH BOX ME KFC DIKHAYEG
BUT USKO JB delete krenge backspace se toh vo ni hoga isi ko kehte hai one waay data binding isi ko tackle krneke liye hm onchange function lgayneg lgayenge ki */ }





      <div className="restraunt-list">
      {restaurants.map((restaurant) => {
        return <RestrauntCard {...restaurant.data}/>;
     
      })}
</div>
</>
) ; 

} ; 

export default Body;