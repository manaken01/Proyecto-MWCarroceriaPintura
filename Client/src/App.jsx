import { useState } from 'react'
import StartScreen from './components/full screens MCV/StartScreen';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/objects/Calendar';
import Navbar from './components/objects/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Calendar/>
      
    </div>
  );
}

export default App
