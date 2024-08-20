import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MintNft from './pages/MintNft';
import Community from './pages/Community';
import ContactUs from './pages/ContactUs';
import Navbar from '../src/Components/Navbar';  // Import Navbar

const App = () => {
  return (
    <div >
    <Router>
      <Navbar />  {/* Include Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mintnft" element={<MintNft />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
