import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Whoweare from "../Components/Whoweare";
import Servicesslide from "../Components/Servicesslide";
import Reviews from "../Components/Reviews";
import Articles from "../Components/Articles";
import Footer from "../Components/Footer";


import React, { Fragment } from 'react'

export default function Home() {
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
  )
}
