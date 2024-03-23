import React from "react";
import ReactDOM from "react-dom";

/**
 * AN IMPORTANT THING JO BHI HMNE SIBLINGS(HEADING 1 , hEADING (ye Aapas me Siblings hai aur root ke child )) BNAYE HAI VO EK ARRAY ME HAI 
 * toh hme unhe hmesha ek key dena hoga jisse ki vo ek unique ho jaye aur react ko pta chl jaye ki ye ek alag alag element hai aur 
 * it helps in inserting more elements in between them and it also helps in deleting them. taki agr key rhe toh ye opta chlk jayega ki kha insert krna hai vaise react ko bhut kaam krna pdega arrsange krna pdega etc vtc; 
 * must read documentation react key reconciliation , ums e diffing algorithom 
 * we should not have two same keys in an array.
 */

const heading = React.createElement("h1", {id: "heading", style: {color: "red"   ,  key : "h1"}} ,  "Namaste Everyone!"); 
const heading1 =  React.createElement("h2" , {id : "heading1 " , style : {color :"blue"}   , key : "xyzz"} , "my second heading") ;

//React.createElement ==> How does it work ?
// 1st argument is the element we want to create
// 2nd argument is the properties we want to give to that element
// 3rd argument is the children of that element
// 4th argument is the key of that element
//What it does is React.createElement gives Object as Output and then this object is converted into HTML and is put on DOM. 

const root = ReactDOM.createRoot(document.getElementById("root"));
const container = React.createElement("div",{id :"container"  , style : {color: "black" }}, [heading , heading1]);

root.render(container) ;
// ? ReactDOM.render(heading, document.getElementById("root")); ==> old method not in use now



// why it is giving both heading and heading 1 output why ? can you explain me ? 

/**
 * !Hmne pdha ki parcel removes console .log but it does not do it automatically we have to configure it for specific environment and projects using a plugin known as,
 * !parcel-plugin-remove-console we can do it by using npm install babel-plugin-transform-remove-console --save-dev OR npm install  -D babel-plugin-transform-remove-console. 
 * now we have to also configure this plugin in our .babelrc file by adding this plugin in our plugins array.
 * we have to create .babelrc file khud se create krni hai , folder and usme likhna hme ye plugins wala jo neech blue me hai vo likhna hai ;  
 * ? "plugins": ["transform-remove-console"]
 * hr plugin ki documentation me suage likhgi hai  vha se usage refer kr skte hai ki kaise use krnahai plugin ko. 
 * ?above steps are same for every plugin we install in our project.
 * its version is locaated in our package.json file and its actual code is inside node_modules folder.
 * 
 * 
 * ab dekho hm baar baar npx parcel index.html likhre toh isko short krne ke liye hm package.json me ek script bnate hai
 * ? "start" : "parcel index.html"
 *  ? ab hm sirf npm run  start likhkr hmara server chl jayega
 * aur production me hm isko build krte hai npx build index.html likhkr hmara build folder bn jayega
 * aur hm isko npm run build likhkr bhi kr skte hai
 *  ? "build" : "parcel build index.html"
 * iski jagah hm npm run build likhkr hmara build folder bn jayega
 * 
 */



/**
 * AB HMNE DEKHA KI WE CAN CREATE ELEMENST USING REACT.CREATEELEMENT BUT THIS IS NOT THE WAY WE CREATE ELEMENTS IN REACT,
 * BUT IT BECOMES A PAIN IN THE ASS AS IT BECOMES COMPLEX IN COMPLEX HTML STRUCTURES so here comes in play JSX
 * what is JSX ?   => jsx is an html like syntax it is not html but like html
 * 
 * 
 */

//  suppose i have to create this headin in jsx then it goes like == > 
const headings = React.createElement("h1", {id: "heading", style: {color: "red"   ,  key : "h1"}} ,  "Namaste Everyone!"); 

const jsx_heading = <h1 id = "title" key = "h1">NAMASTE JAVASCRIPT with jsx</h1> ;
 //const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsx_heading)

//<h1 id = "title" key = "h1">NAMASTE JAVASCRIPT</h1> ;  it is this portion is called as jsx expression  and it is not a string
// if you want it in multiple lines wrap all in()

//questions ==> is JSX Html inside Javascript ==> No ;
//this peace of h1 tag is not html it is HTML like Syntax ;
//fb developer build jsx 
 
// id and key is diffrenrt react idenatifies uniqueness using keys but in html it is done by id 


/**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is commonly used in React applications to define the structure and appearance of components.

Here are some key differences between JSX and HTML:

Syntax: JSX looks similar to HTML, but it is not actually HTML. It is a syntax extension of JavaScript that gets transformed into JavaScript code before being executed by the browser. 
JSX elements are enclosed in curly braces {} and are written using HTML-like tags.

Attributes: JSX attributes are written using camelCase instead of kebab-case in HTML. For example, class in HTML becomes className in JSX, and for in HTML becomes htmlFor in JSX.

JavaScript Expressions: JSX allows you to embed JavaScript expressions within curly braces {}. This allows you to dynamically generate content or perform calculations based on variables or functions.

Component Composition: JSX allows you to compose components by nesting them within each other, similar to how you nest HTML tags. This makes it easy to build complex user interfaces by combining smaller reusable components.

Event Handling: In JSX, event handlers are written using camelCase and are assigned a function reference. For example, onClick instead of onclick in HTML.

Inline Styling: In JSX, inline styles are defined using JavaScript objects instead of CSS strings. This allows for dynamic styling based on variables or state.

It's important to note that JSX needs to be transpiled into regular JavaScript using a tool like Babel before it can be understood by the browser. This is typically done as part of the build process in a React application.

Overall, JSX provides a more expressive and flexible way to define the structure and behavior of components in JavaScript, making it easier to build dynamic and interactive user interfaces.

 */

//  ! JSX is not HTML it is JavaScript XML
//?HOW DOES THIS JSX EXECUTES  ?
//THIS JSX IS EXECUTED BY BABEL AND BABEL CONVERTS THIS JSX INTO REACT.CREATEELEMENT AND THEN IT IS PUT ON THE DOM.
//BABAEL READS jsx line by line and creates a Abstract syntax tree ;
//? WHAT IS ABSTRACT SYNTAX TREE ?
//JSX USESS react.createelement to create elements and then it is put on the dom.
//Babel Comes as a deendecy and it is installed when we install parcel. 

//form now on we will use jsx to create elements and not react.createelement

//jsx_heading it is a react elelement

//!React COMPONENTS ==> 
//EVERY THING IN REACT IS A COMPONENT AND WE CAN CREATE OUR OWN COMPONENTS AS WELL.
//FOR ex ==> wo react wali website ki login button , sign up button , search bar carousal  etc vo sb components hai. 


//there are two types of components in react ==> 
//1. Functional Components   - NEW WAY OF WRITING CODE IN REACT --> RECOMMENDED WAY AND USED IN THIS COURSE
//2. Class Components - OLD WAY OF WRITING CODE IN REACT -->. IMP IN INTERVIEW AND OLDER PROJECTS 


//? name of components should always start with capital letter and use camel case for naming components. (recommended not mandatory) 
//? WHAT IS THE DIFFRENCE BETWEEN THESE TWO COMPONENTS ?
//!1. Functional Components are simple javascript functions that accept props as arguments and return React elements.
// EX ==> 
const Header  = ()=> {
     return (<h1> hello world </h1> ) ;
};    //agr jyada cool aur ache developers return bhi ni likhte arrow function thing broo ;



const Header1  = ()=>  (<h1> hello world without return  </h1> ) ;  
     

//(firse createroot and root.render vgera krna pdega)

// now intresting thing ki jb hm react element  ko render krte hai we simply write ==> root.render(heading)
// but here in casre of react componnet we have to write ==> root.render(<Header/>) why ?

root.render(<Header1/>) ; 
//? why we have to write <Header/> and not Header ? because Header is a function and we have to call it and it will return a react element and then it will be put on the dom.


// we can asso put react element inside our funcational component using {} ==> 

const Header3 = ()=> {

    return (<div>
        {/* /* like this we can put react element inside our functional component using {} */ }
        {jsx_heading}
        <h1> hello world   functional component using {} react element</h1> 
    </div>)  ; 
  
};
root.render(<Header3/>) ;

//we can also pass another functional component inside our functional component using {} ==>
//putting a component in another component is called as Component composition in  react like we did in below; .

const Header4 = ()=> {

    return (<div>
        { /* like this we can put functional componenet inside our functional component using {} */ }
        {Header1()} 
        {/* //or we can also write like this  bhai at last it is aa normal javascript function thats why we can call */}
        <Header1/>
        //either we have to use angualar brackets or we have to use () to call our functional component

        <h1> passing functional component using {} react element</h1> 
    </div>)  ; 
  
};
root.render(<Header4/>) ;


// blow up thing ==> whenewver we want to write javascript inside jsx we can use {} and inside curly braces we can write javascript code.
//jsx also performs sanitization and it also prevents xss attacks.
//what is sanitization ? ==> it is a process of cleaning our code and removing all the malicious code from our code.

