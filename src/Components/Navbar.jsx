import React from 'react';
import { Link } from 'react-router-dom';
import  Logo  from "../assets/logo1.png";
import CustomButton from './Button';

const Navbar = () => {
  return (
    <div className=' bg-black' >
    <nav className='flex justify-between mx-12 pt-4 '>
      <div className='flex space-x-2'>
        <div className='h-10 w-8 '>
        <img src={Logo} className='backdrop-blur-md  bg-white rounded-2xl '></img>
        </div>
        <a className='text-white font-extrabold'>OnchainMemes</a>
      </div>
      <div className='text-white space-x-14'>
      <Link to="/home">Home</Link>
        <Link to="/mintnft">MintNft</Link>
        <Link to="/community">Community</Link>
        {/* <Link to="/contactus">Contact Us</Link> */}
      </div>
      <div className='bg-white rounded-xl p-1 '>
        {/* <Link to="">ConnectWallet</Link> */}
        <CustomButton />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
