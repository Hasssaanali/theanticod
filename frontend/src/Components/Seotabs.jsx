import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Blogseo from './Blogseo';
import Ecomseo from './Ecomseo'



export default function Seotabs() {
  return (
    <Fragment>
        <div className='container-fluid servicecomponents'>
        <div className='row'>
        <Tabs>
            <TabList>
            <Tab><h2>Blog Sites SEO</h2></Tab>
            <Tab><h2>Ecommerce SEO</h2></Tab>
            </TabList>

            <TabPanel><Blogseo/></TabPanel>
            <TabPanel><Ecomseo/></TabPanel>
       </Tabs> 
  
        </div>
    </div>
    </Fragment>
  )
}
