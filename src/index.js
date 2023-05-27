// First we need to import some react tools
import React from "react";
import ReactDOM from "react-dom/client";

// Import our first componenets : App
import { App } from "./App";

// Target the root div --> Inject component to HTML
const rootDiv = document.getElementById("root");


// Transform the root div into react node
const reactRoot = ReactDOM.createRoot(rootDiv);



//Inject our App componnet into the react node

reactRoot.render(<App/>);

// Now you fdon't need Index file anymore because you will work with components now. Which will start from APP.