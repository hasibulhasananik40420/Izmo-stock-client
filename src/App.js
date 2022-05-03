import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Blogs from './Components/Blogs/Blogs';
import ManageItems from './Components/ManageItems/ManageItems';
import AddItems from './Components/AddItems/AddItems';
import MyItems from './Components/MyItems/MyItems';
import ManageInventory from './Components/ManageInventory/ManageInventory';

function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/manageitem" element={<ManageItems />} />
        <Route path="/additem" element={<AddItems />} />
        <Route path="/myitem" element={<MyItems />} />
        <Route path="/manageinventory" element={<ManageInventory />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;


