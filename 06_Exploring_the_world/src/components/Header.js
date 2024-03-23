import { useState } from "react";

const loggedinUser = () => {
   //Api call to authenticate user
    return true ; 
}




const Title = () => (
    <a href="/">
        <img alt = "logo"  className = "logo" src  = "https://th.bing.com/th/id/R.dd4d1acde8fc22ed40fbce3acde6e99a?rik=%2b8JTWnyz2QTWFg&riu=http%3a%2f%2ffoodvilla.no%2fsrc%2fimg%2flogo.png&ehk=Wphc3mBmMYs0rOR4MjkO1zykcVnnjbx6MEDy3h1PSkw%3d&risl=&pid=ImgRaw&r=0"/>
    </a>   
  );
  
  
  const HeaderComponent = () => {
    const [IsLoggedin  , setIsLoggedin] = useState(false); 

    return (
        <div className = "header">
            <Title/>
            <div className = "nav-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
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