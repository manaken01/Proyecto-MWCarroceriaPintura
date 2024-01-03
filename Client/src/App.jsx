import { useState } from 'react'
import PartsForm from './components/forms/PartsForm';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/objects/Calendar';
import Register from './components/Register';
import Navbar from './components/objects/Navbar';
import LogIn from './components/LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/full screens MW/Contact';
import PartsScreen from './components/full screens MW/PartsScreen';
import StartScreen from './components/full screens MW/StartScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parts" element={<PartsScreen />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App