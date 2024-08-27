import React, { useState, useEffect } from 'react';
import Subtract from "../assets/Subtract.png";
import Rect from "../assets/Rectangle .png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Twitter from "../assets/TwitterX.png";
import Telegram from "../assets/Telegram App.png";

const Community = () => {
  const [communities, setCommunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Retrieve the data for all four communities from local storage
    const communityData = ['Community1', 'Community2', 'Community3', 'Community4'].map((community) => ({
      id: community,
      name: localStorage.getItem(`${community}_nftName`) || '',
      description: localStorage.getItem(`${community}_nftDescription`) || '',
      communityName: localStorage.getItem(`${community}_communityName`) || '',
      image: localStorage.getItem(`${community}_uploadedImage`) || Rect,
    }));
    setCommunities(communityData);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.communityName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='font-poppins bg-black'>
    <div className='bg-gradient-to-b from-black via-black to-cyan-500 min-h-screen  '>
      <div className='flex justify-center pt-10'>
        <div className='relative'>
          <input 
            type="text" 
            className='bg-black text-white rounded-lg border-2 border-white p-2 pr-10' 
            placeholder="Search Community" 
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img 
            className='absolute right-3 top-1/2 transform -translate-y-1/2 h-6' 
            src={Subtract} 
            alt="Search Icon"
          />
        </div>
      </div>

      <div className='pt-5'>
        <hr className='border-t-2 border-cyan-800' />
      </div>

      <div className='flex flex-wrap justify-center gap-8 mx-10 pt-12'>
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map((community, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 rounded-lg p-4 w-full sm:w-[22%]">
              <img src={community.image} alt="Uploaded NFT" className='rounded-md w-full' />
              <p className='text-white pt-4 text-center'>
                {community.name || "Your Memes, Your NFT"}: {community.description || "Join the Digital Art Revolution"}
              </p>
              
            </div>
          ))
        ) : (
          <p className="text-white text-center">No communities found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Community;
