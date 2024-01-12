
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/full screens MW/CalendarUser';
import Register from './components/full screens MW/Register';
import Navbar from './components/objects/Navbar';
import LogIn from './components/full screens MW/LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/full screens MW/Contact';

import Information from './components/full screens MW/Information';
import PartsScreenAdmin from './components/full screens MW/PartsScreenAdmin';
import StartScreen from './components/full screens MW/StartScreen';
import CarSellScreen from './components/full screens MW/CarSellScreen';
import CalendarAdmin from './components/full screens MW/CalendarAdmin';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
          <Route path="/calendar" element={<CalendarAdmin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parts" element={<PartsScreenAdmin/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cars" element={<CarSellScreen />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App