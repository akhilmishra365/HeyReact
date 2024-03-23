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
//in commit phaase reactg actually upadets the dom and after that component did mount is cALLED