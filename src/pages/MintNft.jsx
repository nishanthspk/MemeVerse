import React, { useState } from 'react';
import Subtract from "../assets/Subtract.png"

const MintNft = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen pt-24'>
      <div className=' flex items-center mx-32 gap-16'>
        <div className=' w-full '>
          <div>
          <div className='backdrop-blur-md bg-white/10 rounded-lg p-4'>
            <div className='mb-4'>
              <input
                type="text"
                className='w-full rounded-xl bg-slate-500 p-2 text-white'
                placeholder="Enter NFT Name"
              />
            </div>
            <div className='mb-4'>
              <input
                type="text"
                className='w-full rounded-xl bg-slate-500 p-2 text-white'
                placeholder="Enter NFT Description"
              />
              

            </div>
            <div className='mb-4 relative'>
              <input
                type="text"
                className='w-full rounded-xl bg-slate-500 p-2 text-white'
                placeholder="Enter Community Name"
              />
              <img
                className='absolute right-3 top-1/2 transform -translate-y-1/2 h-6' // Position the image inside the input
                src={Subtract}
                alt="Subtract Icon"
              />
            </div>
          </div>
          </div>
        
          <div className=' backdrop-blur-md bg-white/10 rounded-lg mt-10 p-3'>
              <textarea
                type="text"
                className='w-full rounded-xl bg-slate-500 p-2 min-h-40 mt-2 text-white '
                placeholder="Enter NFT Description"
              />
              </div>
        
        </div>


        <div className='w-full '>
          <div className=' '>
            <div className='backdrop-blur-md bg-white/10 min-h-[300px] h-full rounded-lg p-4'>
              <label className='block text-white mb-2 '>Upload NFT Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='w-full text-white '
              />
              {selectedImage && (
                <div className='mt-4'>
                  <p className='text-white'>Image Preview:</p>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className='w-full h-48 object-cover rounded-lg mt-2 '
                  />
                </div>
              )}
            </div>
          </div>


          <div className='mt-8'>
            <button className='w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-xl'>
              Mint NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintNft;
