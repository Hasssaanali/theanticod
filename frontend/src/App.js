import "./style.css"
import React, { Fragment, useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
