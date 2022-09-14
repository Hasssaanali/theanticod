import "./style.css"
import React, { Fragment, useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Fragment>   
     {/* <Home/> */}
     <About/>
    </Fragment>
  );
}

export default App;
