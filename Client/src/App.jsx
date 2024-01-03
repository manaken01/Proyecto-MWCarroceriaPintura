import { useState } from 'react'
import PartsForm from './components/forms/PartsForm';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFilters from './components/objects/SearchFilters';
import Calendar from './components/objects/Calendar';
import Register from './components/Register';
import Navbar from './components/objects/Navbar';
import LogIn from './components/LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from './components/full screens MW/Information';
import Contact from './components/full screens MW/Contact';
import PartsScreen from './components/full screens MW/PartsScreen';
import StartScreen from './components/full screens MW/StartScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parts" element={<PartsScreen />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/form" element={<PartsForm />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App