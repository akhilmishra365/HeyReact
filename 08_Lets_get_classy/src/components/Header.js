import { useState } from "react";
import  {Link} from "react-router-dom";
import logo from "../components/logo.png";

const loggedinUser = () => {
   //Api call to authenticate user
    return true ; 
}

//SPA ==> single page application
//THERE ARE TWO TYPES OF ROUTING ==>
//1. CLIENT SIDE ROUTING
//2. SERVER SIDE ROUTING

//what is client side routing ==> when we change the url and the page does not refresh  it does not makes a network call to the server
//what is server side routing ==> here data comes from the server and the page refreshes a network call is made to the server ;


const Title = () => (
    <a href="/">
        <img alt = "logo"  className = "logo" src  = {logo}/>
    </a>   
  );
  
  
  const HeaderComponent = () => {
    const [IsLoggedin  , setIsLoggedin] = useState(false); 

    return (
        <div className = "header">
            <Title/>
            <div className = "nav-items">
                <ul>
                <Link to = "/"><li>Home</li></Link>
                
                {/*ab hm chahte hai ki hm jb about us pe click kren toh vo about us page pe jaye uske liye hm anchor tag ka use kr skte hai <a href = "/about"> <li>About</li></a> 
                
                  but isse hoga kya ki pura pagfe refresh hoke reload hoga toh hm ye nhi chahte is liye hm react router ka link component ka  use krte hai
                 link is exactly like anchor tag but it does not refresh the page   instead of href it usest to*/} 
                
                <Link to = "/AboutUs"> <li>AboutUs</li></Link>
               
                
                <Link to = "/Contact"><li>Contact</li></Link>
                <li>Cart</li>
                </ul>
  
  
            </div>
            {
                (IsLoggedin) ? (
                
                <button className = "btn" onClick={()=>setIsLoggedin(false)}>LogOut</button>
                ) : (
                 <button className = "btn" onClick={()=>setIsLoggedin(true)}>Login</button>)
            }
            
            
        </div>
    );
  };

export default HeaderComponent;