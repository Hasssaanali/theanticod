import "./style.css"
import "./responsive.css"
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
import Singlearticcle from "./Pages/Singlearticcle";
import Preloader from './Components/Preloader';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, [])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

    <Fragment>
       {loading ? <Preloader/> :
        <>
        <BrowserRouter>
        <Header />
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="articles" element={<Articlebanner />} />
          <Route path="services" element={<Services />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="singlearticle/:key" element={<Singlearticcle />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </>
}
    </Fragment>
  );
}

export default App;
