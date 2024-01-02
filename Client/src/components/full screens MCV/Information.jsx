import React from 'react';
import Navbar from '../objects/Navbar';
import InformationFirst from './InformationFirst';
import InformationSecond from './InformationSecond';
import Contact from './Contact';
import Divider from '../decoration/Divider';

function Information() {
    return (
        <div>
            <Navbar/>
            <InformationFirst/>
            <Divider/>
            <InformationSecond/>
            <Divider/>
            <Contact/>
        </div>
    )
};

export default Information;