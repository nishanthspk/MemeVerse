import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Framer Motion Variants
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const rotateFadeIn = {
  hidden: { opacity: 0, rotate: -15 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const bounceOnHover = {
  whileHover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
  whileTap: { scale: 0.9 },
};

const popUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const MintNft = () => {
  const [selectedCommunity, setSelectedCommunity] = useState('Community1');
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');
  const [nftDescription1, setNftDescription1] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Load stored values when the selected community changes
  useEffect(() => {
    setNftName(localStorage.getItem(`${selectedCommunity}_nftName`) || '');
    setNftDescription(localStorage.getItem(`${selectedCommunity}_nftDescription`) || '');
    setNftDescription1(localStorage.getItem(`${selectedCommunity}_nftDescription1`) || '');
    setSelectedImage(localStorage.getItem(`${selectedCommunity}_uploadedImage`) || null);
  }, [selectedCommunity]);

  // Function to handle file selection and save to local storage
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        localStorage.setItem(`${selectedCommunity}_uploadedImage`, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle text input changes and save to local storage
  const handleInputChange = (event, setFunction, key) => {
    setFunction(event.target.value);
    localStorage.setItem(`${selectedCommunity}_${key}`, event.target.value);
  };

  return (
    <div className='font-poppins bg-black'>
      <div className='bg-gradient-to-b from-black via-black to-cyan-500 h-full mx-4 md:min-h-screen pt-24'>
        <motion.div
          className='flex items-center mx-32 gap-16'
          initial="hidden"
          animate="visible"
        >
          <motion.div className='w-full' variants={scaleUp}>
            <motion.div
              className='backdrop-blur-md bg-white/10 rounded-lg p-4'
              variants={rotateFadeIn}
            >
              <div className='mb-4'>
                <motion.select
                  value={selectedCommunity}
                  onChange={(e) => setSelectedCommunity(e.target.value)}
                  className='w-full rounded-xl bg-slate-500 p-2 text-white'
                  variants={scaleUp}
                >
                  <option value="Community1">Community 1</option>
                  <option value="Community2">Community 2</option>
                  <option value="Community3">Community 3</option>
                  <option value="Community4">Community 4</option>
                </motion.select>
              </div>
              <div className='mb-4'>
                <motion.input
                  type="text"
                  value={nftName}
                  onChange={(e) => handleInputChange(e, setNftName, 'nftName')}
                  className='w-full rounded-xl bg-slate-500 p-2 text-white'
                  placeholder="Enter NFT Name"
                  variants={scaleUp}
                />
              </div>
              <div className='mb-4'>
                <motion.input
                  type="text"
                  value={nftDescription}
                  onChange={(e) => handleInputChange(e, setNftDescription, 'nftDescription')}
                  className='w-full rounded-xl bg-slate-500 p-2 text-white'
                  placeholder="Enter NFT Description"
                  variants={scaleUp}
                />
              </div>
            </motion.div>
            <motion.div
              className='backdrop-blur-md bg-white/10 rounded-lg mt-10 p-3'
              variants={rotateFadeIn}
            >
              <motion.textarea
                type="text"
                value={nftDescription1}
                onChange={(e) => handleInputChange(e, setNftDescription1, 'nftDescription1')}
                className='w-full rounded-xl bg-slate-500 p-2 min-h-40 mt-2 text-white'
                placeholder="Enter Additional NFT Description"
                variants={scaleUp}
              />
            </motion.div>
          </motion.div>

          <motion.div className='w-full' variants={rotateFadeIn}>
            <motion.div
              className='backdrop-blur-md bg-white/10 min-h-[300px] h-full rounded-lg p-4'
              variants={scaleUp}
            >
              <label className='block text-white mb-2'>Upload NFT Image:</label>
              <motion.input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='w-full text-white'
                variants={scaleUp}
              />
              {selectedImage && (
                <motion.div
                  className='mt-4'
                  initial="hidden"
                  animate="visible"
                  variants={popUp}
                >
                  <p className='text-white'>Image Preview:</p>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className='w-full h-48 object-cover rounded-lg mt-2'
                  />
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className='mt-8'
              variants={bounceOnHover}
            >
              <motion.button
                className='w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-xl'
                variants={bounceOnHover}
              >
                Mint NFT
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MintNft;
