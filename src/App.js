import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
