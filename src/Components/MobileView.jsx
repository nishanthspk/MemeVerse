// src/MobileMenu.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './Button';

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    onClose(); // Close the mobile menu
    navigate('/', { state: { scrollToService: true } });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full  bg-cyan-400 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-end ">
        <button onClick={onClose} className="text-black text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center mt-8 space-y-4">
        
      <Link to="/home">
        <button
          className="text-cyan-400 px-2 py-1 bg-black rounded-sm text-xl"
          onClick={onClose}
        >
          Home
        </button>
        </Link>
        <Link to="/mintnft">
        <button
          className="text-cyan-500 px-2 py-1 bg-black rounded-sm text-xl"
          onClick={onClose}
        >
          MintNft
        </button></Link>
        <Link to="/community">
        <button
          className="text-cyan-500 px-2 py-1 bg-black rounded-sm text-xl"
          onClick={onClose}
        >
          Community
        </button>
        </Link>
        <div className='bg-white text-black  rounded-xl p-1 flex md:hidden '>
        <CustomButton />
      </div>
      </nav>
    </div>
  );
};

export default MobileMenu;