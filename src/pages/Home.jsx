import React from 'react';
import Illustration from '../assets/Illustration.png';
import Illustration1 from '../assets/Illustration2.png';

const Home = () => {
  return (
    <div className='font-poppins'>
      <div className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen'>
        <div className='pt-16 pb-4'>
          <div className='flex justify-center'>
            <p className='text-white flex justify-center text-2xl bg-black border-2 border-cyan-500 w-fit p-3 text-center rounded-xl font-semibold'>
              Upload, Mint, and Connect 🚀
            </p>
          </div>
          <p className='text-white flex justify-center pb-4 pt-5 text-5xl text-center font-bold leading-tight'>
            Your Memes, Your NFT: Join<br /> the Digital Art Revolution
          </p>
          <p className='text-white flex justify-center text-3xl pt-5 text-center leading-relaxed'>
            Own and trade your favorite memes as NFTs. Create, mint, and share with a<br /> global community of meme enthusiasts. Join the meme revolution now!
          </p>
          <div className='flex justify-center pt-8'>
            <a className='bg-white rounded-2xl p-2 text-black hover:bg-cyan-500 transition-all text-lg font-medium'>
              Get Started
            </a>
          </div>
        </div>

        <div className='flex justify-between h-72 mx-4'>
          <img src={Illustration1} alt='Illustration 1' className='' />
          <img src={Illustration} alt='Illustration 2' className='' />
        </div>
      </div>

      <div className='bg-black'>
        <div className='text-white flex justify-between pt-6 pb-6 mx-40'>
          <p className='text-2xl font-semibold leading-snug'>
            Want to earn rewards while uploading your favorite memes?
          </p>
          <p className='text-lg leading-relaxed'>
            At Meme3, we empower you to create, mint, and trade meme NFTs. Our platform offers an intuitive meme creation tool, a secure NFT minting process, and a vibrant marketplace for buying and selling. Join our global community of meme enthusiasts and turn your favorite memes into valuable digital assets.
          </p>
        </div>
      </div>

      <div className='bg-gradient-to-t from-black via-black to-cyan-500 min-h-screen'>
        <div className='text-white pt-6'>
          <p className='flex justify-center text-xl font-semibold'>How Meme3 Works</p>
          <p className='flex justify-center text-5xl pt-2 font-bold leading-tight'>Create, Mint, Trade, Enjoy</p>
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

      <div className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen'>
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
      </div>
      


    </div>
  );
};

export default Home;
