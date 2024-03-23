import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import Profilefunctional from "./Profile";
import React from "react";


//open profile and profile class both and see diffrence between functional ands class



// const About = () => {
//     return(
//         <div>
//             <h1>About Us</h1>
//             <p>
//                  I am a software developer who is passionate about food and technology. </p>
//                 {/**<Outlet/> */}  or <Profile  name = "akhil mishra class "/> or <Profilefunctional name = "akhil" />

//         </div>
        
//     );    
// };

// export default About;



//let us convert our about to class component
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("Parent -constructor") ;
    }

    componentDidMount() {   
        console.log(" Parent  - componentDidMount") ;
    }

 //after render phase componentdidmount is called for the first time 
//
  

    render() {
        console.log("Parent - render") ;
        return (
            <div>
                <h1>About Us</h1>
                <p>
                     I am a software developer who is passionate about food and technology. </p>
                <Profile  name = "FIRST CHILD "/> 
                <Profilefunctional name = "SECOND CHILD" />
            </div>
        );
    };
}

export default About;





//when react is rendering it renders it in two phase 
 //1. phase 1 is called render phase
 //2. phase 2 is called commit phase

//what happens is rendwer phase has constructer  and render method and commit phase is after render phase and it has componentdidmount method
// commit phase  has componentdidmount method 
//in commit phaase react actually upadates the initial dom  (creates HTML structure ) and after that component did mount is cALLED

//render phase is called only once but commit phase is called multiple times

//render phase is fast and commit phase is slow
//!Now when therer is only one child parent will call the cinstructor of the  child and then render method of the  child and then componentdidmount of the first child

//now upr hmne dekha na ki kya scene tha 
//do component the na ek class ke us case me flow kaya hoga 


/**
 * ?Parent constructor called
 * ?Parent render called
 * ?First child constructor called
 * ?First child render called
 * !Ab dekho first child ka componentdidmount called  nhi hoga 
 * !Bcz maanlo ye mount me api call kr ra hai aur usme delay hogya tb toh second child ka constructer bhi call ni ho payega tb toh 
 * is liye reactkehta hai ki ek kaam kro pehle sbka render krlo fir atlast componentdidmount call krte hai
 * ?second child constructor called
 * ?second child render called
 * ?first child componentdidmount called
 * ?second child componentdidmount called
 * ?parent componentdidmount called
 * 
 * 
 * 
 * 
 * 
 * 
 */





//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ this diagram will help you to understand the react lifecycle methods


