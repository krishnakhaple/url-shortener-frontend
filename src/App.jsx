import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import necessary components for routing
import UrlShortener from './components/UrlShortenerForm';
import Register from './components/Register'; // Import Register component
import Login from './components/Login'; // Import Login component
import UserLinks from "./components/UserLinks";
import UpdateAction from "./components/UpdateAction";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Logout from "./components/Logout";

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">

        <header className="header">
        <h1>URL Shortener</h1>

        {/* Navbar with Links */}
        <nav className="navbar">
          <ul>
            
             <li> <Link to="/login">Login</Link> </li>
           
            <li>  <Link to="/register">Register</Link></li>
            
            <li> <Link to="/url-shortener">URL Shortener</Link></li>
          </ul>
        </nav>

        </header>

        {/* Define routes for different pages */}

        <main className="main-content">
        <Routes>
         
       
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/url-shortener" element={<UrlShortener />} />
          <Route path="/user-links/:userId" element={<UserLinks />} />
          <Route path="/update/:urlId" element={<UpdateAction />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
