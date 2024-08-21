import React from 'react';
import  Ilustrayion  from "../assets/Illustration.png";
import   Ilustrayion1  from "../assets/Illustration2.png";


const Home = () => {
  return (
    <div>
    <div className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen'>
      <div className='pt-16 pb-4'>
        <div className='flex justify-center'>
      <p className='text-white flex justify-center  text-2xl bg-black border-2 border-cyan-500 w-fit p-3 text-center rounded-xl'>
      Upload, Mint, and Connect   🚀   </p>
      </div>
      <p className='text-white flex justify-center pb-4 pt-5 text-5xl text-center'>
      Your Memes, Your NFT: Join<br></br> the Digital Art Revolution
      </p>
      <p className='text-white flex justify-center text-3xl pt-5 text-center'>
      Own and trade your favorite memes as NFTs. Create, mint, and share with a <br />global community  of meme enthusiasts. Join the meme revolution now!
      </p>
      <div className='flex justify-center pt-8'>
       <a className=' bg-white rounded-2xl p-2 '>Get Started</a>
      </div>
      </div>

      <div className='flex justify-between h-72 mx-4 '>
        <img src={Ilustrayion1} ></img>
        <img src={Ilustrayion} ></img>
      </div>

      
      
    </div>

    <div className='bg-black'> 
    <div className=' text-white flex justify-between pt-6 pb-6 mx-40 '>
        <p className='text-2xl '>
        Want to earn rewards while uploading your favorite memes?</p>
        <p className=''>
        At Meme3, We empowers you to create, mint, and trade meme NFTs. Our platform offers an intuitive meme creation tool, a secure NFT minting process, and a vibrant marketplace for buying and selling. Join our global community of meme enthusiasts and turn your favorite memes into valuable digital assets.
        </p>
      </div>
      </div>

      <div className='bg-gradient-to-t from-black via-black to-cyan-500 min-h-screen'>

      <div className='text-white pt-6'>
        <p className='flex justify-center text-xl'>How Meme3 Works</p>
        <p className='flex justify-center text-5xl pt-2 '>Create, Mint, Trade, Enjoy</p>
        <p className='flex justify-center pt-2 text-center '>Explore and discover how you can engage with memes, convert them into  NFTs, and participate in the global marketplace to unlock rewards and opportunities.</p>
      </div>
      <div className='text-white flex justify-between pt-24 mx-2'>
        <div className=''>
          <p className='text-8xl text-cyan-300 flex justify-center'>1</p>
          <p className='pt-4 flex justify-center text-2xl'>Create Your Meme</p>
          <p className='pt-4  flex justify-center text-center'>Design your next viral meme with our intuitive creation tool, where every idea can become a masterpiece.
        </p>
        </div>
        <div>
          <p className='text-8xl text-cyan-300  flex justify-center'>2</p>
          <p className='pt-4  flex justify-center text-2xl'>Mint Your Meme</p>
          <p className='pt-4  flex justify-center text-center'>Transform your meme into a unique, collectible NFT with just a few clicks, ensuring authenticity and ownership.
        </p>
        </div>
        <div>
        <p className='text-8xl text-cyan-300  flex justify-center'>3</p>
        <p className='pt-4  flex justify-center text-2xl'>Trade and Enjoy</p>
        <p className='pt-4  flex justify-center text-center'>Connect with a global community of meme enthusiasts, trade your NFTs, and enjoy the benefits of digital ownership. 
        </p>
        </div>
      </div>
      <div className='flex justify-center pt-24'>
       <a className=' bg-white rounded-2xl p-2'>Get Started</a>
      </div>

      </div>

      <div className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen'>
         <div className='text-white  pt-32'>
           <p className='flex justify-center text-5xl text-center'>
           Join Meme3 Today and Shape <br /> the Future of Memes! </p>
           <p className='flex justify-center pt-12 mx-16 text-center'>Join our vibrant community today. Sign up now and be part of the future of memes! Welcome to Meme3,<br /> where creativity meets blockchain technology, and every meme is a valued digital asset.
           </p>  <div className='flex justify-center pt-24'>
       <a className=' bg-white rounded-2xl text-black p-2'>Get Started</a>
      </div>
         </div>
      </div>
    </div>
  );
};

export default Home;
