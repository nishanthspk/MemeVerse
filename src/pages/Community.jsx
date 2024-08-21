import React from 'react';
import Subtract from "../assets/Subtract.png"
import Rect from "../assets/Rectangle .png";
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
import Linkdin from "../assets/LinkedIn.png"
import Twitter from "../assets/TwitterX.png"
import Telegram from "../assets/Telegram App.png"



const Community = () => {
  return (
    <div>
      <div className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen'>

      <div className='flex justify-center pt-10'>
            <div className='relative'>
              <input 
                type="text" 
                className='bg-black rounded-lg border-2 border-white pt-2 pl-4 pr-12' // Add padding to the right for the image
                placeholder="" // Optional: Add a placeholder
              />
              <img 
                className='absolute right-3 top-1/2 transform -translate-y-1/2 h-6' // Position the image inside the input
                src={Subtract} 
                alt="Subtract Icon"
              />
            </div>
          </div>
          <div className='pt-5'>
        
          <hr className=' border-t-2  border-cyan-800  ' />
          </div>

        <div className='flex justify-between mx-10 pt-12'>
        
        <div className="backdrop-blur-md bg-white/10 rounded-lg p-4" >
          <div>
            <img src={Rect} alt="" />

          </div>
          <div>
            <p className='text-white pt-4 text-center'>
            Your Memes, Your NFT: Join <br />
            the Digital Art Revolution
            </p>
          </div>
          <div className='flex pt-5 justify-center'>
          <img className='pr-2 h-6' src={Facebook} alt="" />
          <img className='pr-2 h-6' src={Instagram} alt="" />
          <img className='pr-2 h-6' src={Telegram} alt="" />
          <img className='pr-2 h-6' src={Twitter} alt="" />
          <img className='pr-2 h-6' src={Linkdin} alt="" />

          </div>
        </div>
        

        <div className='backdrop-blur-sm bg-white/10 rounded-lg p-4 '>
          <div>
            <img src={Rect} alt="" />

          </div>
          <div>
            <p className='text-white pt-4 text-center'>
            Your Memes, Your NFT: Join <br />
            the Digital Art Revolution
            </p>
          </div>
          <div className='flex pt-5 justify-center'>
          <img className='pr-2 h-6' src={Facebook} alt="" />
          <img className='pr-2 h-6' src={Instagram} alt="" />
          <img className='pr-2 h-6' src={Telegram} alt="" />
          <img className='pr-2 h-6' src={Twitter} alt="" />
          <img className='pr-2 h-6' src={Linkdin} alt="" />

          </div>
        </div>

        <div className="backdrop-blur-md bg-white/10 rounded-lg p-4">
          <div>
            <img src={Rect} alt="" />

          </div>
          <div>
            <p className='text-white pt-4 text-center'>
            Your Memes, Your NFT: Join <br />
            the Digital Art Revolution
            </p>
          </div>
          <div className='flex pt-5 justify-center'>
          <img className='pr-2 h-6' src={Facebook} alt="" />
          <img className='pr-2 h-6' src={Instagram} alt="" />
          <img className='pr-2 h-6' src={Telegram} alt="" />
          <img className='pr-2 h-6' src={Twitter} alt="" />
          <img className='pr-2 h-6' src={Linkdin} alt="" />

          </div>
        </div>

        <div className="backdrop-blur-md bg-white/10 rounded-lg p-4">
          <div>
            <img src={Rect} alt="" />

          </div>
          <div>
            <p className='text-white pt-4 text-center'>
            Your Memes, Your NFT: Join <br />
            the Digital Art Revolution
            </p>
          </div>
          <div className='flex  pt-5 justify-center'>
          <img className='pr-2 h-6' src={Facebook} alt="" />
          <img className='pr-2 h-6' src={Instagram} alt="" />
          <img className='pr-2 h-6' src={Telegram} alt="" />
          <img className='pr-2 h-6' src={Twitter} alt="" />
          <img className='pr-2 h-6' src={Linkdin} alt="" />

          </div>
        </div>





        </div>
        </div>
    </div>
  );
};

export default Community;
