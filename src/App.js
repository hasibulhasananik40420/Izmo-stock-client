import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Footer from './Components/Footer/Footer';
import Blogs from './Components/Blogs/Blogs';
import AddItems from './Components/AddItems/AddItems';
import MyItems from './Components/MyItems/MyItems';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import SingleService from './Components/SingleService/SingleService';
import Navbar2 from './Components/Navbar2/Navbar2';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Offers from './Components/Offers/Offers';

function App() {
  return (
    <div>
       <Navbar2></Navbar2>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/singleservice/:id" element={
          <RequireAuth>
            <SingleService />
          </RequireAuth>
        } />
        <Route path="/additem" element={
          <RequireAuth> <AddItems /></RequireAuth>
        } />
        <Route path="/myitem" element={
          <RequireAuth><MyItems /></RequireAuth>
        } />
        <Route path="/manageinventory" element={<ManageInventory />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;


