import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.8 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const popUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const buttonHover = {
  hover: { scale: 1.05, boxShadow: '0px 0px 8px rgb(255, 255, 255)' },
  tap: { scale: 0.95 },
};

const MintNft = () => {
  const [selectedCommunity, setSelectedCommunity] = useState('Community1');
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');
  const [nftDescription1, setNftDescription1] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Load temporary values when the selected community changes
  useEffect(() => {
    setNftName(localStorage.getItem(`${selectedCommunity}_temp_nftName`) || '');
    setNftDescription(localStorage.getItem(`${selectedCommunity}_temp_nftDescription`) || '');
    setNftDescription1(localStorage.getItem(`${selectedCommunity}_temp_nftDescription1`) || '');
    setSelectedImage(localStorage.getItem(`${selectedCommunity}_temp_uploadedImage`) || null);
  }, [selectedCommunity]);

  // Function to handle file selection and save to local storage
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        localStorage.setItem(`${selectedCommunity}_temp_uploadedImage`, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle text input changes and save to local storage
  const handleInputChange = (event, setFunction, key) => {
    setFunction(event.target.value);
    localStorage.setItem(`${selectedCommunity}_temp_${key}`, event.target.value);
  };

  // Function to show the modal if all fields are filled
  const handleMintNft = () => {
    if (nftName && nftDescription && selectedImage) {
      // Save the data to persistent storage for Community.jsx
      const communityData = {
        nftName,
        nftDescription,
        nftDescription1,
        selectedImage,
      };
      localStorage.setItem(`${selectedCommunity}_data`, JSON.stringify(communityData));

      // Clear the temporary data after minting
      setIsModalVisible(true);
      setErrorMessage('');

      setNftName('');
      setNftDescription('');
      setNftDescription1('');
      setSelectedImage(null);

      localStorage.removeItem(`${selectedCommunity}_temp_nftName`);
      localStorage.removeItem(`${selectedCommunity}_temp_nftDescription`);
      localStorage.removeItem(`${selectedCommunity}_temp_nftDescription1`);
      localStorage.removeItem(`${selectedCommunity}_temp_uploadedImage`);
    } else {
      setErrorMessage('Please fill in all required fields before minting the NFT.');
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='font-poppins bg-black'>
      <div className='bg-gradient-to-b from-black via-black to-cyan-500 h-full mx-4 md:min-h-screen pt-24'>
        <motion.div
          className='flex flex-col md:flex-row items-center md:mx-32 gap-8 md:gap-16'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className='w-full' variants={itemVariants}>
            <motion.div
              className='backdrop-blur-md bg-white/10 rounded-lg p-4'
              variants={rotateIn}
            >
              <div className='mb-4'>
                <motion.select
                  value={selectedCommunity}
                  onChange={(e) => setSelectedCommunity(e.target.value)}
                  className='w-full rounded-xl bg-slate-500 p-2 text-white'
                  variants={itemVariants}
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
                  variants={itemVariants}
                />
              </div>
              <div className='mb-4'>
                <motion.input
                  type="text"
                  value={nftDescription}
                  onChange={(e) => handleInputChange(e, setNftDescription, 'nftDescription')}
                  className='w-full rounded-xl bg-slate-500 p-2 text-white'
                  placeholder="Enter NFT Description"
                  variants={itemVariants}
                />
              </div>
            </motion.div>
            <motion.div
              className='backdrop-blur-md bg-white/10 rounded-lg mt-10 p-3'
              variants={rotateIn}
            >
              <motion.textarea
                type="text"
                value={nftDescription1}
                onChange={(e) => handleInputChange(e, setNftDescription1, 'nftDescription1')}
                className='w-full rounded-xl bg-slate-500 p-2 min-h-40 mt-2 text-white'
                placeholder="Enter Additional NFT Description"
                variants={itemVariants}
              />
            </motion.div>
          </motion.div>

          <motion.div className='w-full pb-2 ' variants={rotateIn}>
            <motion.div
              className='backdrop-blur-md bg-white/10 min-h-[300px] h-full  rounded-lg p-4 '
              variants={scaleUp}
            >
              <label className='block text-white mb-2'>Upload NFT Image:</label>
              <motion.input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='w-full text-white'
                variants={itemVariants}
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
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.button
                className='w-full bg-cyan-600 md:hover:bg-black lg:hover:bg-black hover:bg-black pt-5 text-white py-2  rounded-xl'
                onClick={handleMintNft}
              >
                Mint NFT
              </motion.button>
              {errorMessage && (
                <p className="text-red-500 text-center mt-4">{errorMessage}</p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {isModalVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <motion.div
            className="bg-white rounded-lg p-6 max-w-md mx-auto text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4">NFT Minted Successfully!</h2>
            <p>Your NFT has been successfully minted and added to your collection.</p>
            <button
              className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MintNft;
