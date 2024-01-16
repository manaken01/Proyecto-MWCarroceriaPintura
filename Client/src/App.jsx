
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
import CarSellScreenAdmin from './components/full screens MW/CarSellScreenAdmin';
import CalendarAdmin from './components/full screens MW/CalendarAdmin';
import CalendarUser from './components/full screens MW/CalendarUser';
import UserProfile from './components/resources/UserProfile'; 
import UserScreenAdmin from './components/full screens MW/UserScreenAdmin';
import ManageUsers from './components/full screens MW/ManageUsers';
import MyCars from './components/full screens MW/MyCars';
import UserScreenGeneral from './components/full screens MW/UserScreenGeneral';
import CarSellScreenUser from './components/full screens MW/CarSellScreenUser';
import ChangePassword from './components/full screens MW/changePassword';
import ResetPassword from './components/full screens MW/ResetPassword';

function App() {
  //console.log(UserProfile.getType());
  const CalendarScreen = UserProfile.getType() !== 1 ? <CalendarUser /> : <CalendarAdmin />;

  const PartsScreen = UserProfile.getType() !== 1 ? <PartsScreenUser /> : <PartsScreenAdmin />;

  const UserScreen = UserProfile.getType() === 0 ? <LogIn /> :
                     UserProfile.getType() === 1 ? <UserScreenAdmin /> : 
                     <UserScreenGeneral />;

  const manageUsers = UserProfile.getType() === 1 ? <ManageUsers /> : null;

  const CarSellScreen = UserProfile.getType() === 1 ? <CarSellScreenAdmin /> : <CarSellScreenUser />;

  const ChangePasswordScreen = UserProfile.getType() !== 0 ? <ChangePassword /> : null;


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
          <Route path="/parts/:brand" element={PartsScreen} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/manageUsers" element={< ManageUsers/>} />
          <Route path="/myCar" element={<MyCars/>} />
          <Route path="/cars" element={CarSellScreen} />
          <Route path="/user" element={UserScreen} />
          <Route path="/manageUsers" element={manageUsers} />
          <Route path="/changePassword" element={ChangePasswordScreen} />
          <Route path="/resetPassword" element={<ResetPassword />} />

        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App