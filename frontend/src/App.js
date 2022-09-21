import "./style.css"
import React, { Fragment, useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contactus from "./Pages/Contactus";
import Services from "./Pages/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Articlebanner from "./Components/Articlebanner";



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
          <Route path="articles" element={<Articlebanner />} />
          <Route path="services" element={<Services />} />
          <Route path="contactus" element={<Contactus />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </Fragment>
  );
}

export default App;
