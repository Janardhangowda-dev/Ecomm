import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './Nav.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import FooterPage from './Components/FooterPage';
import Category from './Components/Category';
import Shop from './Components/Shop';
import ContactUs from './Components/ContactUs';
import Blog from './Components/Blog';
import Men from './Components/Men';
import Red from './Components/Red';
import LoginPage from './Components/LoginPage';
import Invoice from './Components/Invoice';


import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to import Bootstrap CSS



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/Category" element={<Category/>} />
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Login" element={<LoginForm/>}/>
          <Route path="/Loginpage" element={<LoginPage/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/RegisterForm" element={<RegisterForm/>} />
          <Route path="/Men" element={<Men/>} />
          <Route path="/Red" element={<Red/>} />
          <Route path="/invoice" element={<Invoice/>} />

          

          
        </Routes>
        <FooterPage />
      </div>
    </Router>

  );
}

export default App;
