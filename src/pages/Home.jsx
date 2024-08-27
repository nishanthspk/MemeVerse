import React from 'react';
import Illustration from '../assets/Illustration.png';
import Illustration1 from '../assets/Illustration2.png';
import Logo from "../assets/logo1.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Twitter from "../assets/TwitterX.png";
import Telegram from "../assets/Telegram App.png";

const Home = () => {
  return (
    <div className='font-poppins bg-black'>
      <div className='bg-gradient-to-b from-black via-black to-cyan-500 h-full md:min-h-screen mx-4 rounded-b-xl'>
        <div className='md:pt-52 lg:pt-10  lg:pb-4 pt-20 '>
          <div className='flex justify-center '>
            <div >
            <p className='text-white lg:text-xl flex justify-center sm:text-xl md:text-2xl bg-black border-2 border-cyan-500  w-fit p-2   text-center rounded-xl  '>
              Upload, Mint, and Connect 🚀
            </p>
            </div>
          </div>
          <p className='text-white flex justify-center md:pb-4 md:pt-10 pt-10 text-2xl md:text-5xl text-center font-bold leading-tight'>
            Your Memes, Your NFT: Join<br /> the Digital Art Revolution
          </p>
          <p className='text-white flex justify-center text-sm sm:text-xl md:text-3xl md:pt-10 pt-10 lg:pt-5 lg:mx-16 md:text-center lg:text-center text-center leading-relaxed'>
            Own and trade your favorite memes as NFTs. Create, mint, and share with a global community of meme enthusiasts. Join the meme revolution now!
          </p>
          <div className='flex justify-center md:pt-20 lg:pt-8 pt-10 pb-10'>
            <a className='bg-white rounded-2xl p-3 text-black hover:bg-cyan-500 transition-all  text-lg font-medium'>
              Get Started
            </a>
          </div>
        </div>

        <div className='hidden md:flex justify-between  md:h-80 lg:h-72 md:mx-5 lg:mx-4 '>
          <img src={Illustration1} alt='Illustration 1' className='' />
          <img src={Illustration} alt='Illustration 2' className='' />
        </div>
      </div>

      <div className='bg-black p-10'>
        <div className='text-white grid grid-cols-2 md:pt-4 lg:pt-6 md:pb-3 lg:pb-6 md:mx-5 space-x-10 items-center  '>
          <p className='text-4xl font-semibold leading-snug '>
            Want to earn rewards while uploading your favorite memes?
          </p>
          <p className='text-base leading-relaxed'>
            At Meme3, we empower you to create, mint, and trade meme NFTs. Our platform offers an intuitive meme creation tool, a secure NFT minting process, and a vibrant marketplace for buying and selling. Join our global community of meme enthusiasts and turn your favorite memes into valuable digital assets.
          </p>
        </div>
      </div>

      <div className='bg-gradient-to-t from-black via-black to-cyan-500 min-h-screen rounded-2xl mx-4'>
        <div className='text-white md:pt-40 lg:pt-6'>
          <p className='flex justify-center md:text-3xl lg:text-xl uppercase font-medium'>How Meme3 Works</p>
          <p className='flex justify-center text-5xl md:pt-4 lg:pt-2  leading-tight'>Create, Mint, Trade, Enjoy</p>
          <p className='flex justify-center pt-2 text-center mx-4 text-lg leading-relaxed'>
            Explore and discover how you can engage with memes, convert them into NFTs, and participate in the global marketplace to unlock rewards and opportunities.
          </p>
        </div>

        <div className='text-white flex justify-between pt-24 mx-2'>
          <div className='w-1/3 text-center'>
            <p className='text-8xl text-cyan-300 font-bold'>1</p>
            <p className='pt-4 text-2xl font-semibold'>Create Your Meme</p>
            <p className='pt-4 leading-relaxed'>
              Design your next viral meme with our intuitive creation tool, where every idea can become a masterpiece.
            </p>
          </div>
          <div className='w-1/3 text-center'>
            <p className='text-8xl text-cyan-300 font-bold'>2</p>
            <p className='pt-4 text-2xl font-semibold'>Mint Your Meme</p>
            <p className='pt-4 leading-relaxed'>
              Transform your meme into a unique, collectible NFT with just a few clicks, ensuring authenticity and ownership.
            </p>
          </div>
          <div className='w-1/3 text-center'>
            <p className='text-8xl text-cyan-300 font-bold'>3</p>
            <p className='pt-4 text-2xl font-semibold'>Trade and Enjoy</p>
            <p className='pt-4 leading-relaxed'>
              Connect with a global community of meme enthusiasts, trade your NFTs, and enjoy the benefits of digital ownership.
            </p>
          </div>
        </div>

        <div className='flex justify-center pt-24'>
          <a className='bg-white rounded-2xl p-2 text-black hover:bg-cyan-500 transition-all text-lg font-medium'>
            Get Started
          </a>
        </div>
      </div>

      <div className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen rounded-2xl mx-4 '>
        <div className='text-white pt-32'>
          <p className='flex justify-center text-5xl text-center font-bold leading-tight'>
            Join Meme3 Today and Shape<br /> the Future of Memes!
          </p>
          <p className='flex justify-center pt-12 mx-16 text-center leading-relaxed'>
            Join our vibrant community today. Sign up now and be part of the future of memes! Welcome to Meme3, where creativity meets blockchain technology, and every meme is a valued digital asset.
          </p>
          <div className='flex justify-center pt-24'>
            <a className='bg-white rounded-2xl text-black p-2 hover:bg-cyan-500 transition-all text-lg font-medium'>
              Get Started
            </a>
          </div>
        </div>
        <div>
        <div className='flex justify-center pt-10 space-x-2'>
        <div className='h-10 w-8 '>
        <img src={Logo}></img>
        </div>
        <a className='text-white text-2xl  '>OnchainMemes</a>
      </div>
        </div>
      </div>
      <div className='flex pt-5 justify-center'>
            <img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={Facebook} alt="Facebook" />
            <img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={Instagram} alt="Instagram" />
            <img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={Telegram} alt="Telegram" />
            <img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={Twitter} alt="Twitter" />
            <img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={LinkedIn} alt="LinkedIn" />
      </div>


    </div>
  );
};

export default Home;
