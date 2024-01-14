
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/full screens MW/CalendarUser';
import Register from './components/full screens MW/Register';
import Navbar from './components/objects/Navbar';
import LogIn from './components/full screens MW/LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/full screens MW/Contact';

import Information from './components/full screens MW/Information';
import PartsScreenUser from './components/full screens MW/PartsScreenUser';
import PartsScreenAdmin from './components/full screens MW/PartsScreenAdmin';
import StartScreen from './components/full screens MW/StartScreen';
import CarSellScreen from './components/full screens MW/CarSellScreen';
import CalendarAdmin from './components/full screens MW/CalendarAdmin';
import CalendarUser from './components/full screens MW/CalendarUser';
import UserProfile from './components/resources/UserProfile'; 
import UserScreenAdmin from './components/full screens MW/UserScreenAdmin';
import ManageUsers from './components/full screens MW/ManageUsers';
import MyCars from './components/full screens MW/MyCars';

function App() {
  console.log(UserProfile.getType());
  const PartsScreen = UserProfile.getType() !== 1 ? <PartsScreenUser /> : <PartsScreenAdmin />;
  const CalendarScreen = UserProfile.getType() !== 1 ? <CalendarUser /> : <CalendarAdmin />;
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
          <Route path="/calendar" element={CalendarScreen} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parts" element={PartsScreen} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cars" element={<CarSellScreen />} />
          <Route path="/user" element={< UserScreenAdmin/>} />
          <Route path="/manageUsers" element={< ManageUsers/>} />
          <Route path="/myCar" element={<MyCars/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App