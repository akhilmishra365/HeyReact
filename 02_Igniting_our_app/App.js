// PARCEL FEATURES  ==> 
//IMAGE OPTIMIZATION , MINIFYING OUR CODE HMR , CLEANING OUR CODE , BUNDLING OUR CODE , SERVING OUR CODE ON LOCAL SERVER , SUPPORT FOR TYPESCRIPT , SUPPORT FOR SASS , SUPPORT FOR LESS , SUPPORT FOR POSTCSS , SUPPORT FOR CSS MODULES , SUPPORT FOR REACT , SUPPORT FOR VUE , SUPPORT FOR ANGULAR , SUPPORT FOR EMBER , SUPPORT FOR PUG , SUPPORT FOR HANDLEBARS , SUPPORT FOR EJS , SUPPORT FOR LIT-HTML , SUPPORT FOR MARKO , SUPPORT FOR SVELTE , SUPPORT FOR REASON , SUPPORT FOR ELM , SUPPORT FOR MDX , SUPPORT FOR WEB COMPONENTS , SUPPORT FOR NODE.JS , SUPPORT FOR DENO , SUPPORT
// IT ALSO DOES CACHING WHILE DEVEL0PMENT, IT ALSO TASKESX CARES OF COMAPATIBILE WITH OLD VERSION OF BROWSER IT ADDS POLYFILLED 
//PARCEL ALSO ALLOWS US TO GET THE FUNCTIONALITY OF HTTPS SO THAT WE CAN TESTA OUR APP ON HTTPS SERVER ALSO ==> NPX PARCEL INDEX.HTML --https ;
// we should put parcel it in our git ignore bcz see anything which is auto grnerated i.e is we can generate on our server  we should  put it in our git ignore file ;
//parcel is a zero config module just give it entry point of app and then it will do everything for us ;
//HMR - Hot Module REPLACEMENT ==> 
//? it is a feature of parcel which helps us to reload our page automatically when we make changes in our code
//how HMR WORKS BCZ  THERE IS SOMETHING KNOWN AS fILE WATCHER ALGORITHM  AND IT WATCHES OUR FILE AND WHENEVER WE MAKE CHANGES IN OUR FILE IT RELOADS OUR PAGE AUTOMATICALLY
//? HMR IS A FEATURE OF PARCEL WHICH HELPS US TO RELOAD OUR PAGE AUTOMATICALLY WHENEVER WE MAKE CHANGES IN OUR CODE ;
//what is that parcel.cache file ? ==> it is a file which is created by parcel and it is used to cache our files so that it can reload our page faster (Space given to paecel for HMR , minfizing code etc... ) ;
//parcel also minifies our code and it also does tree shaking for us , what is tree shaking ? ==> it is a process of removing unused code from our code ;
///node module ke anddr ek folder hai named as browser list and it is used to make our code compatible with older browsers also ;
//what is dist folder ? ==> it is a folder which is created by parcel and it is used to store our minified code ;

//when we type npx parcel html then we create a develeopment build  and serves it on our local server when we tell parcel to build production development using build command and all these happens inside the dist folder;

//difference between devdependencies and dependencies ==> devdependencies are those dependencies which are only used in development enviornment and dependencies are those which are used in production enviornment also i.e global enviornment  ;

//transitive dependencies are used by parcel to minify our code and to do other things ;
//we have our package manger which takes care and handles all the dependencies for u

// WHAT ARE TRANSITIVE DEPENDEACNIES ? ==> TRANSITIVE DEPENDENCIES ARE THOSE DEPENDENCIES WHICH ARE USED BY OUR DEPENDENCIES TO DO THEIR WORK ;

// POLYFILLING ==> IT IS A PROCESS OF ADDING CODE TO OUR CODE SO THAT IT CAN WORK ON OLDER BROWSERS ALSO ;
import ReactDOM from "react-dom/client" ; //here we are getting react-dom from our node modules
import React from "react"  ; //here we are getting react from our node modules


const heading = React.createElement("h1" , {
    id : "title",
  } , "Namaste Everyone !") 
const root =  ReactDOM.createRoot(document.getElementById("root")) ;  

// root.render(heading) ; 
const heading1 = React.createElement("h1" ,{id : "heading1" ,Style :"background-color : red"},"MY FIRST HEADING");
const heading2 = React.createElement("h1" ,{id : "heading2" ,Style :"background-color : blue"},"MY Second HEADING")
const container  = React.createElement("div" , {id : "container"} , [ heading , heading1,heading2]) ; 
root.render(container) ; 

//render fucntion replaces not appendsd thats why agr neeche khi render likhoge toh pura ht ke ekdum nya ayega


//bundlers => vite , parcel , webpack react js itself uses webpack we will be using here parcel ;
//we can use npm for package manager , we can use also use yarn ;
//we we need npm ? 
/*npm is a package manager for Node.js with hundreds of thousands of packages. Although it does create some of your directory structure/organization, 
this is not the main purpose.
The main goal, as you touched upon, is automated dependency and package management. 
This means that you can specify all of your project's dependencies inside your package.json file, 
then any time you (or anyone else) needs to get started with your project they can just run npm install and immediately have all of the dependencies installed. 
On top of this, it is also possible to specify what versions your project depends upon to prevent updates from breaking your project.
It is definitely possible to manually download your libraries, copy them into the correct directories, and use them that way. 
However, as your project (and list of dependencies) grows, this will quickly become time-consuming and messy. 
It also makes collaborating and sharing your project that much more difficult.
Hopefully this makes it more clear what the purpose of npm is. As a Javascript developer (both client-side and server-side),
npm is an indispensable tool in my workflow. 
*/

// ? npm init -y  this command initializes our react app ; after this command we will get a package.json file 
//?npm install -D parcel(this -D /--save-Dev means dev dependencies  that we dont want it in global enciornment 
//dev dpendencies ==> All the packages my project need )are know as dependencies ;
//after running this command wae will get a package-lock.json 
//and it is a very imp file bitch 

//?Difference between package json and packagelock json is imp 
//! caret and tilde in package.json ? ==> it is basically used for minor and major package 
//if we use ^ (caret and we are currently using 2.8.2 version and a new version comes 2.8.3 using caret will automatically upgrade for minor versions (only))
//if we use ~ (tilde  and we are currently using 2.8.2 version and a new version comes 3.8.0 using tilde will automatically upgrade for major versions (only))
//if neither tilde nor caret is given it means wae will use this particular version only
//pacakgelockj jsson will tell us which exact version of librsry  we are using , it locks the package and tells what version is we are using 


//!important things about package lock. json 

//? ==>it is a very imp file it locks the version 
//? ==> we should not put pacakagelock.json in our gitignore we should put it inside our git;
//?Package lock.json maintains the exact version of package it keeps the track, it maintains the hash also  ,hash ensures that it is the same package on our machine and on our server.it maintains Integrity .



//?node module ==>why it is here ?bcz whwne we install something it installs it in our node module , so basically node  module is kind of database for our npm 
//?how will parcel minify codr ==> as it uses minifier which is locatedin node module ; 

//our project has depenmdecies on parcel and parcel  has dependencies on minifier 
// the browser list in parcel helps us to make our work on older browser 
//we should not put node module in our git bcz it is very big and our package-lock json has enough  data to create / regenerate node modules ; 

//so here it goes ==> we have a copy copy of node modulesin our local enviorn,ment and we shipo packagelock json to our server and server recreates node module there; 

//? npm install react 
//? npm install react-dom
//to ignite our app we use npx parcel entry point
// ? i.e npx parcel index.html //this created a local server for us and parcel is doing this for us
//npx means to execute ; when we want to execute things awe use npx


//never touch node module ;;




