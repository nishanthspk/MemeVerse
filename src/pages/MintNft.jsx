import React, { useState, useEffect } from 'react';

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
      <div className='bg-gradient-to-b from-black via-black to-cyan-500 h-full mx-4 md:min-h-screen pt-24 '>
        <div className='flex items-center mx-32 gap-16'>
          <div className='w-full'>
            <div className='backdrop-blur-md bg-white/10 rounded-lg p-4'>
              <div className='mb-4'>
                <select
                  value={selectedCommunity}
                  onChange={(e) => setSelectedCommunity(e.target.value)}
                  className='w-full rounded-xl bg-slate-500 p-2 text-white'
                >
                  <option value="Community1">Community 1</option>
                  <option value="Community2">Community 2</option>
                  <option value="Community3">Community 3</option>
                  <option value="Community4">Community 4</option>
                </select>
              </div>
              <div className='mb-4'>
                <input
                  type="text"
                  value={nftName}
                  onChange={(e) => handleInputChange(e, setNftName, 'nftName')}
                  className='w-full rounded-xl bg-slate-500 p-2 text-white'
                  placeholder="Enter NFT Name"
                />
              </div>
              <div className='mb-4'>
                <input
                  type="text"
                  value={nftDescription}
                  onChange={(e) => handleInputChange(e, setNftDescription, 'nftDescription')}
                  className='w-full rounded-xl bg-slate-500 p-2 text-white'
                  placeholder="Enter NFT Description"
                />
              </div>
            </div>
            <div className='backdrop-blur-md bg-white/10 rounded-lg mt-10 p-3'>
              <textarea
                type="text"
                value={nftDescription1}
                onChange={(e) => handleInputChange(e, setNftDescription1, 'nftDescription1')}
                className='w-full rounded-xl bg-slate-500 p-2 min-h-40 mt-2 text-white'
                placeholder="Enter NFT Description"
              />
            </div>
          </div>

          <div className='w-full'>
            <div className='backdrop-blur-md bg-white/10 min-h-[300px] h-full rounded-lg p-4'>
              <label className='block text-white mb-2'>Upload NFT Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='w-full text-white'
              />
              {selectedImage && (
                <div className='mt-4'>
                  <p className='text-white'>Image Preview:</p>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className='w-full h-48 object-cover rounded-lg mt-2'
                  />
                </div>
              )}
            </div>

            <div className='mt-8'>
              <button className='w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-xl'>
                Mint NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintNft;
