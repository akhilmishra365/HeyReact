// import ReactDOM from "react-dom/client" 
// import React from "react" ;
// import HeaderComponent from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import { createBrowserRouter , RouterProvider } from "react-router-dom";
// import About from "./components/AboutUs";
// import Error from "./components/Error";


// //Our app layout is a component
// //and react says that dont create a componenet insde a component 
// //you can call though for ex header footer are also component but are called not created inside app component


// const AppLayout = ()=> {
//     return(

//         // <React.Fragment>
//         //     <HeaderComponent />
//         //     <body />
//         //     <Footer />
//         // </React.Fragment>

//          // OR 
//         <>
//             <HeaderComponent />
//             <Body />
//             <Footer />
//         </>

//     ) ; 
// } ; 




// /**
//  * today we are creating r outs for different section of our page 
//  * for ex ==> foodvilla.com/about us 
//  * for this we will create a route for about us
//  * we will importsomething called {createBrowserRouter} from "react-router-dom"
//  * 
//  */


// //this appRouter is a component it uses createBrowserRouter to create a router aur  createBrowserRouter ke andr hm routes define krte hain 
// //i.w ye btate hai ki path kya hoga kispe click kroge toh kha jaoge ; 
// //this createBroweserRouter is a component which is used to create a router it takes some configuration which is array of objects in  which each object defines a route 

// //we need to provide this app router to our app for this wewill use router provider from react router dom

// const appRouter = createBrowserRouter([


//     {
//         //jb hm / pe ho toh appLayout dikha do element me vo jata hai jo dikhana hai 
//         path:"/",
//         element : <AppLayout/>, 


//         //INCASE OF SOME ERROR SHOW THIS 
//         errorElement : <Error />
//     },
//     {
//         //aur element me vo jata hai jo dikhana hai
//         path:"/AboutUs",
//         element : <About />

//     }

// ]) ; 



//Ab hmari dikkat kya hai ki hm about us pe gye toh sala header veader chla gya hai 
//but hme vo chahiye taki navigate back kr skennn 

import ReactDOM from "react-dom/client" 
import React from "react" ;
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider  , Outlet} from "react-router-dom";
import About from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
//NESTED ROUTING ==> jb hm kisi page pe jate hai toh uske andr bhi kuch pages hote hai
const AppLayout = ()=> {
    return(
 
       //if you want to create nested routes you should use outlet component provide by react-router-dom
       //i want my header footer always intact and middle portion changeing according to the routes  that is outlet render according to the routes
        // <>
        //     <HeaderComponent />
        //     <About /> 
        //     <Body /> 
        //     <Contact/>
        //     <Footer />
        // </>
        //!IMPORTANT all the children should go inside my outlet according to the route
        <>
        <HeaderComponent />
        <Outlet />
        <Footer />
    </>

    ) ; 
} ; 





const appRouter = createBrowserRouter([
//are in children ka mtlb ye ho gya ki jb rout / hai toh outlet me body chla JAYEGA
//JB /ABOUT HAI TOH OUTKE ME ABOUT CHLA JAYEGA...


    {   
        path:"/",
        element : <AppLayout />, 
        errorElement : <Error /> , 
        //for making we use children ==>
        //now my about us is a child of app layout
        children :[
            {
                path : "/",
                element : <Body />
            } ,

            {
                path : "/AboutUs",
                element : <About />
            } ,

            {
                path : "/contact",
                element : <Contact/>
            },
            //DOING DYNAMIC ROUTING ==> FOR EXAMPLE WE WANT TO SHOW A PARTICULAR RESTRAUNT ON CLICKING ON IT AUR USKA ROUTE DYNAMICALLY CHANGE HO FOR EXAMPLE MY ROUT IS 
            //FOODVILLA.COM/RESTRAUNT/ID TOH YE ID DYANMICALLY CHANGE HOGA Hr restaurant ki alg id toh uske hisab se uska route bhi change hoga
            //agr we click on restaurant card it should take us to that restaurant page

            {
                //ye jo /:id hai yhi hai dynamic routing ka cause mainly
                path : "/restaurant/:id",
                element : <RestaurantMenu/>
            }




        ]



    },
   

]) ; 




































const root = ReactDOM.createRoot(document.getElementById("root"));
//dekho hr baar hm log app layout ko render kr re the
// root.render(<AppLayout/>);

//but ab hm jb router bna chuke hai toh hm path ke according chixon ko render krenge is liye

root.render(<RouterProvider router ={appRouter} />) ;
//NOW ABOVE LINE KA YE MTLB HAI KI JO BHI ROOT RENDER KREGA VO ACCRODING TO appRouter Render Krega;