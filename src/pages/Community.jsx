import React, { useState, useEffect } from 'react';
import Subtract from "../assets/Subtract.png";
import Rect from "../assets/Rectangle .png";


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

  // Filter communities based on search query
  const filteredCommunities = communities.filter((community) =>
    community.id.toLowerCase().includes(searchQuery.toLowerCase()) // Searching by community id (e.g., "Community1")
  );

  return (
    <div className='font-poppins bg-black'>
      <div className='bg-gradient-to-b from-black via-black to-cyan-500 h-full mx-4 md:min-h-screen rounded-xl '>
        <div className='flex justify-center pt-10'>
          <div className='relative'>
            <input 
              type="text" 
              className='bg-black text-white rounded-lg border-2 border-white p-2 pr-10' 
              placeholder="Search Community " 
              value={searchQuery}
              onChange={handleSearchChange}
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
                <div className='flex pt-5 justify-center'>
                 
                </div>
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
