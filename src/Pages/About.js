import React, { Fragment } from 'react'
import Header from "../Components/Header";

import Footer from "../Components/Footer";
import Aboutbanner from '../Components/Aboutbanner';
import Aboutexpert from '../Components/Aboutexpert';
import Workwithus from '../Components/Workwithus';

export default function About() {
  return (
    <Fragment>
    <Header/>
    <Aboutbanner/>
    <Aboutexpert/>
    <Workwithus/>

     <Footer/>
    </Fragment>
  )
}
