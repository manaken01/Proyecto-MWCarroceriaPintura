import { useState } from 'react'
import PartsForm from './components/forms/PartsForm';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFilters from './components/objects/SearchFilters';
import Calendar from './components/objects/Calendar';
import Register from './components/Register';
import Navbar from './components/objects/Navbar';
import LogIn from './components/LogIn';
import Information from './components/full screens MCV/Information';
import Contact from './components/full screens MCV/Contact';
import PartsScreen from './components/full screens MCV/PartsScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parts" element={<PartsScreen />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App