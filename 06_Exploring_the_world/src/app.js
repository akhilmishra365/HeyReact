
import ReactDOM from "react-dom/client" 
import React from "react" ;

import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";




//Our app layout is a component
//and react says that dont create a componenet insde a component 
//you can call though for ex header footer are also component but are called not created inside app component




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
