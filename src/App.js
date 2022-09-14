import "./style.css"
import React, { Fragment, useState, useEffect } from 'react';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Whoweare from "./Components/Whoweare";
import Servicesslide from "./Components/Servicesslide";
import Reviews from "./Components/Reviews";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Fragment>

     <Header/>
     <Banner/>
     <Whoweare/>
     <Servicesslide/>
     <Reviews/>
     <Articles/>
     <Footer/>
    </Fragment>
  );
}

export default App;
