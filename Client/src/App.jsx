import { useState } from 'react'
import PartsForm from './components/forms/PartsForm';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFilters from './components/objects/SearchFilters';
import Calendar from './components/objects/Calendar';
import Register from './components/Register';
import Navbar from './components/objects/Navbar';
import LogIn from './components/LogIn';

function App() {
  return (
    <div>
      <Navbar />
      <LogIn/>
      <Register />
    </div>
  );
}

export default App
