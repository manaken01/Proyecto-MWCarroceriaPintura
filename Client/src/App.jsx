
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/full screens MW/CalendarUser';
import Register from './components/full screens MW/Register';
import Navbar from './components/objects/Navbar';
import LogIn from './components/full screens MW/LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/full screens MW/Contact';

import Information from './components/full screens MW/Information';
import PartsScreen from './components/full screens MW/PartsScreen';
import StartScreen from './components/full screens MW/StartScreen';
import MyCars from './components/full screens MW/MyCars';
import CardMyCars from './components/objects/CardMyCars';
import MyCarForm from './components/forms/MyCarForm';
import MyCarFormModified from './components/forms/MyCarFormModified';
import CarSellScreen from './components/full screens MW/CarSellScreen';

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
          <Route path="/parts" element={<PartsScreen/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cars" element={<CarSellScreen />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App