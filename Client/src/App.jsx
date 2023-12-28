import { useState } from 'react'
import InformationFirst from './components/InformationFirst';
import Navbar from './components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div>
      <Navbar/>
      <InformationFirst />
    </div>
    
  );
}

export default App
