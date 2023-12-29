import { useState } from 'react'
import InformationFirst from './components/InformationFirst';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from './components/Divider';
import InformationSecond from './components/InformationSecond';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <InformationFirst/>
      <Divider/>
      <InformationSecond/>
      <Divider/>
      <Contact />
    </div>
  );
}

export default App
