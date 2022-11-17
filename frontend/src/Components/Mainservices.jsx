import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Webdevelopment from './Webdevelopment';
import Graphic from './Graphic';
import Seotabs from './Seotabs';
import Animation from './Animation';
import Marketing from './Marketing';



export default function Mainservices() {
  return (
   <Fragment>
    <div className='container-fluid'>
        <div className='row'>
        <Tabs data-aos="fade-right" data-aos-duration="2000">
            <TabList>
            <Tab><img src='https://hostedsitedemo.com/rent/allimages/web.png' /></Tab>
            <Tab><img src='https://hostedsitedemo.com/rent/allimages/Graphic.png' /></Tab>
            <Tab><img src='https://hostedsitedemo.com/rent/allimages/SEO.png' /></Tab>
            <Tab><img src='https://hostedsitedemo.com/rent/allimages/Animation.png' /></Tab>
            <Tab><img src='https://hostedsitedemo.com/rent/allimages/Digital.png' /></Tab>
            </TabList>
            <div className="container">
              <div className="row mobile">
                <img src="./img/swipe.jpg" alt="sc" width="10"/>
              </div>
            </div>
            <TabPanel> <Webdevelopment /> </TabPanel>
            <TabPanel><Graphic /> </TabPanel>
            <TabPanel><Seotabs/></TabPanel>
            <TabPanel><Animation/></TabPanel>
            <TabPanel><Marketing/></TabPanel>
       </Tabs> 
          <div className="container">
              <div className="row mobile">
                <img src="./img/swipe.jpg" alt="sc" width="10"/>
              </div>
            </div>
        </div>
    </div>
       
   </Fragment>
  )
}
