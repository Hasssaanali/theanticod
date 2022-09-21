import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Wordpress from './Wordpress';
import Shopify from './Shopify';
import Wix from './Wix';
import Woocommerce from './Woocommerce';
import Reacttab from './Reacttab';

export default function Webdevelopment() {
  return (
    <Fragment>
        <div className='container-fluid servicecomponents'>
        <div className='row'>
        <Tabs>
            <TabList>
            <Tab><h2>Wordpress</h2></Tab>
            <Tab><h2>Shopify</h2></Tab>
            <Tab><h2>React</h2></Tab>
            <Tab><h2>Woocommerce</h2></Tab>
            <Tab><h2>Wix</h2></Tab>
            </TabList>

            <TabPanel><Wordpress/></TabPanel>
            <TabPanel><Shopify/></TabPanel>
            <TabPanel><Reacttab/></TabPanel>
            <TabPanel><Woocommerce/></TabPanel>
            <TabPanel><Wix/></TabPanel>
       </Tabs> 
  
        </div>
    </div>
    </Fragment>
  )
}
