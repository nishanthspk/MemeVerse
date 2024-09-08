import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Illustration from '../assets/Illustration.png';
import Illustration1 from '../assets/Illustration2.png';
import Logo from "../assets/logo1.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Twitter from "../assets/TwitterX.png";
import Telegram from "../assets/Telegram App.png";
import MintNft from './MintNft';

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const slideInFromLeft = {
  hidden: { x: '-100vw' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};

const slideInFromRight = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.1, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95 },
  
};



const Home = () => {

 
    const navigate = useNavigate(); // Hook to handle navigation
  
    // Handler function for button click
    const handleClick = () => {
      navigate('/MintNft'); // Replace with your target route
    };
  return (
    <div className='font-poppins bg-black overflow-hidden'>
      <motion.div
        className='bg-gradient-to-b from-black via-black to-cyan-500 h-full md:min-h-screen mx-4 rounded-b-xl'
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className='md:pt-52 lg:pt-10 lg:pb-4 pt-20'>
          <motion.div
            className='flex justify-center'
            variants={fadeInUp}
          >
            <div class="relative flex items-center justify-center px-4 py-2 bg-black text-white text-xl font-semibold rounded-lg overflow-hidden">
              <div class="absolute inset-0 rounded-lg  border-transparent  bg-gradient-to-tr "></div>
              <div class="relative  flex items-center">
                <span>Upload, Mint, and Connect</span>
                <span class="ml-2">🚀</span>
              </div>
            </div>


          </motion.div>
          <motion.p
            className='text-white flex justify-center md:pb-4 md:pt-10 pt-10 text-5xl lg:text-5xl md:text-5xl text-center font-bold leading-tight'
            variants={fadeInUp}
          >
            Your Memes, Your NFT: Join<br /> the Digital Art Revolution
          </motion.p>
          <motion.p
            className='text-white flex justify-center text-2xl lg:text-xl md:text-3xl md:pt-10 pt-10 lg:pt-5 lg:mx-16 md:text-center lg:text-center text-center leading-relaxed'
            variants={fadeInUp}
          >
            Own and trade your favorite memes as NFTs. Create, mint, and share with a global community of meme enthusiasts. Join the meme revolution now!
          </motion.p>
          <motion.div
            className='flex justify-center md:pt-20 lg:pt-8 pt-14 pb-14'
            variants={fadeInUp}
          >
            <motion.a
              className='bg-white rounded-2xl  p-3 text-black hover:bg-cyan-500 transition-all text-lg font-medium'
              variants={scaleOnHover}
              initial="initial"
              whileHover="hover"
              onClick={handleClick}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className='hidden md:flex justify-between md:h-80 lg:h-72 md:mx-5 lg:mx-4'
          initial="hidden"
          animate="visible"
        >
          <motion.img src={Illustration1} alt='Illustration 1' variants={slideInFromLeft} />
          <motion.img src={Illustration} alt='Illustration 2' variants={slideInFromRight} />
        </motion.div>
      </motion.div>

      <motion.div
        className='bg-black p-10'
        variants={fadeInUp}
      >
        <div className='text-white md:grid md:grid-cols-2  md:pt-4 lg:pt-6 md:pb-3 lg:pb-6 md:mx-5 md:space-x-10 items-center '>
          <p className='text-3xl md:text-4xl font-semibold leading-snug'>
            Want to earn rewards while uploading your favorite memes?
          </p>
          <p className='text-base  leading-relaxed'>
            At Meme3, we empower you to create, mint, and trade meme NFTs. Our platform offers an intuitive meme creation tool, a secure NFT minting process, and a vibrant marketplace for buying and selling. Join our global community of meme enthusiasts and turn your favorite memes into valuable digital assets.
          </p>
        </div>
      </motion.div>

      <motion.div
        className='bg-gradient-to-t from-black via-black to-cyan-500 min-h-screen rounded-2xl mx-4'
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className='text-white md:pt-40 lg:pt-6 pt-10'
          variants={fadeInUp}
        >
          <p className='flex justify-center md:text-3xl lg:text-xl text-xl  uppercase font-medium '>How Meme3 Works</p>
          <p className='flex justify-center text-4xl text-center pt-10 md:pt-4 lg:pt-2 leading-tight'>Create, Mint, Trade, Enjoy</p>
          <p className='flex justify-center pt-14 md:pt-2 text-center mx-4 text-lg leading-relaxed'>
            Explore and discover how you can engage with memes, convert them into NFTs, and participate in the global marketplace to unlock rewards and opportunities.
          </p>
        </motion.div>

        <motion.div
          className='text-white md:flex justify-between gap-10 pt-24 mx-2'
          variants={fadeInUp}
        >
          <div className=' flex gap-10'>
            <div className=' text-center'>
              <p className='text-8xl text-cyan-300 font-bold'>1</p>
              <p className='md:pt-4 pt-10 text-2xl font-semibold'>Create Your Meme</p>
              <p className='pt-4 leading-relaxed hidden md:flex justify-center'>
                Design your next viral meme with our intuitive creation tool, where every idea can become a masterpiece.
              </p>
            </div>
            <div className=' text-center'>
              <p className='text-8xl text-cyan-300 font-bold'>2</p>
              <p className='md:pt-4 pt-10 text-2xl font-semibold'>Mint Your Meme</p>
              <p className='pt-4 leading-relaxed hidden md:flex justify-center'>
                Transform your meme into a unique, collectible NFT with just a few clicks, ensuring authenticity and ownership.
              </p>
            </div>
          </div>
          <div>
            <div className=' text-center'>
              <p className='text-8xl text-cyan-300 font-bold'>3</p>
              <p className='md:pt-4 pt-10 text-2xl font-semibold'>Trade and Enjoy</p>
              <p className=' leading-relaxed hidden md:flex justify-center'>
                Connect with a global community of meme enthusiasts, trade your NFTs, and enjoy the benefits of digital ownership.
              </p>
            </div>
          </div>
        </motion.div>

       
      </motion.div>

      <motion.div
        className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen rounded-2xl mx-4'
        variants={fadeInUp}
      >
        <div className='text-white pt-32 '>
          <motion.p
            className='flex justify-center text-5xl text-center font-bold leading-tight'
            variants={fadeInUp}
          >
            Join Meme3 Today and Shape<br /> the Future of Memes!
          </motion.p>
          <motion.p
            className='flex justify-center pt-12 mx-16 text-center leading-relaxed'
            variants={fadeInUp}
          >
            Join our vibrant community today. Sign up now and be part of the future of memes! Welcome to Meme3, where creativity meets blockchain technology, and every meme is a valued digital asset.
          </motion.p>
          <motion.div
            className='flex justify-center pt-24'
            variants={fadeInUp}
          >
            <motion.a
              className='bg-white rounded-2xl text-black p-2 hover:bg-cyan-500 transition-all text-lg font-medium'
              variants={scaleOnHover}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp}>
          <div className='flex justify-center pt-10 space-x-2'>
            <div className='h-10 w-8'>
              <img src={Logo} alt="OnchainMemes Logo" />
            </div>
            <a className='text-white text-2xl'>MemeVerse</a>
          </div>
          <div className='flex pt-5 justify-center'>
            <motion.img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={Facebook} alt="Facebook" variants={scaleOnHover} />
            <motion.img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={Instagram} alt="Instagram" variants={scaleOnHover} />
            <motion.img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={Telegram} alt="Telegram" variants={scaleOnHover} />
            <motion.img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={Twitter} alt="Twitter" variants={scaleOnHover} />
            <motion.img className='pr-2 h-6 cursor-pointer hover:opacity-75' src={LinkedIn} alt="LinkedIn" variants={scaleOnHover} />
          </div>
          <div className='flex justify-center pt-5 text-white text-xs md:text-xs mb-2 pb-4'>
            <motion.p>Copyright ©️ 2024 Coding Artist | All Rights Reserved</motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
