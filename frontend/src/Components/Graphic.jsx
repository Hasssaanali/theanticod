import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function Webdevelopment() {
  return (
    <Fragment>
        <div className='container-fluid servicecomponents'>
        <div className='row'>
        <Tabs>
            <TabList>
            <Tab><h2>Logo Design</h2></Tab>
            <Tab><h2>Flyer/Brochure Design</h2></Tab>
            <Tab><h2>Stationary Design</h2></Tab>
            <Tab><h2>Social Media Post</h2></Tab>
            <Tab><h2>UI/UX Design</h2></Tab>
            </TabList>

            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
       </Tabs> 
  
        </div>
    </div>
    </Fragment>
  )
}
