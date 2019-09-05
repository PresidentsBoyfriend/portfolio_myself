import React from 'react';
import Mobile from "../components/Mobile";
import PC from "../components/PC"; 
import {
  isMobile,
  // browserName,
  // mobileVendor,
  // mobileModel,
  // fullBrowserVersion,
  // osName,
  // osVersion,
  // deviceType
} from "react-device-detect";

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);
console.log(isMobile);

const App = () => {
    return (  
      <div className="wrapper">
      { isMobile ? <Mobile /> : <PC/> }
    </div>
    )
}

export default App;