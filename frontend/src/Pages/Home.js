import Banner from "../Components/Banner";
import Whoweare from "../Components/Whoweare";
import Servicesslide from "../Components/Servicesslide";
import Reviews from "../Components/Reviews";
import Articles from "../Components/Articles";
import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
    <Banner/>
     <Whoweare/>
     <Servicesslide/>
     <Reviews/>
     <Articles/>
    </Fragment>
  )
}
