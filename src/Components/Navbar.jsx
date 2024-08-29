import React from 'react';
import { Link } from 'react-router-dom';
import  Logo  from "../assets/logo1.png";
import CustomButton from './Button';

const Navbar = () => {
  return (
    <div className=' bg-black font-poppins ' >
    <nav className='flex justify-between mx-12 pt-4 '>
      <div className='flex space-x-2 '>
        <div className='h-10 w-8 '>
        <img src={Logo} className='backdrop-blur-md   '></img>
        </div>
        <a className='text-white text-2xl pt-1 '>MemeVerse</a>
      </div>
      <div className='text-white space-x-14 hidden md:flex pt-2'>
      <Link to="/home">Home</Link>
        <Link to="/mintnft">MintNft</Link>
        <Link to="/community">Community</Link>
        {/* <Link to="/contactus">Contact Us</Link> */}
      </div>
      <div className='bg-white rounded-xl p-1 hidden md:flex '>
        {/* <Link to="">ConnectWallet</Link> */}
        <CustomButton />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
