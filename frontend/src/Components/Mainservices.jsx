import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Webdevelopment from './Webdevelopment';
import Graphic from './Graphic'


export default function Mainservices() {
  return (
   <Fragment>
    <div className='container-fluid'>
        <div className='row'>
        <Tabs data-aos="fade-right" data-aos-duration="2000">
            <TabList>
            <Tab><img src='./img/Web.png' /></Tab>
            <Tab><img src='./img/Graphic.png' /></Tab>
            <Tab><img src='./img/Seo.png' /></Tab>
            <Tab><img src='./img/animation.png' /></Tab>
            <Tab><img src='./img/Digital.png' /></Tab>
            </TabList>

            <TabPanel> <Webdevelopment /> </TabPanel>
            <TabPanel><Graphic /> </TabPanel>
            <TabPanel>
            <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 5</h2>
            </TabPanel>
       </Tabs> 
  
        </div>
    </div>
       
   </Fragment>
  )
}
