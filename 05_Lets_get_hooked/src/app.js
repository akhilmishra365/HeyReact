
import ReactDOM from "react-dom/client" 
import React from "react" ;

import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";










const AppLayout = ()=> {
    return(

        // <React.Fragment>
        //     <HeaderComponent />
        //     <body />
        //     <Footer />
        // </React.Fragment>

         // OR 
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>

    ) ; 
} ; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
