import React from 'react';
import InformationFirst from './InformationFirst';
import InformationSecond from './InformationSecond';
import Contact from './Contact';
import Divider from '../decoration/Divider';

function Information() {
    return (
        <div>
            <InformationFirst/>
            <Divider/>
            <InformationSecond/>
            <Divider/>
            <Contact/>
        </div>
    )
};

export default Information;