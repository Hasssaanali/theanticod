import React, { Fragment } from 'react'
import Contactbanner from '../Components/Contactbanner';
import Contacticons from '../Components/Contacticons';
import Contactmap from '../Components/Contactmap';



export default function About() {
  return (
    <Fragment>
    <Contactbanner/>
    <Contacticons/>
    <Contactmap/>
    </Fragment>
  )
}