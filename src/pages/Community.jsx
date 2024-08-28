import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Subtract from "../assets/Subtract.png";
import Rect from "../assets/Rectangle .png";

// Framer Motion Variants
const slideInTop = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const wobbleHover = {
  whileHover: {
    rotate: [0, 2, -2, 2, 0],
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const fadeRotateIn = {
  hidden: { opacity: 0, rotate: 10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

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
      <div className='bg-gradient-to-b from-black via-black to-cyan-500 h-full mx-4 md:min-h-screen rounded-xl'>
        <div className='flex justify-center pt-10'>
          <motion.div
            className='relative'
            initial="hidden"
            animate="visible"
            variants={slideInTop}
          >
            <motion.input 
              type="text" 
              className='bg-black text-white rounded-lg border-2 border-white p-2 pr-10' 
              placeholder="Search Community " 
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </motion.div>
        </div>

        <div className='pt-5'>
          <motion.hr
            className='border-t-2 border-cyan-800'
            initial="hidden"
            animate="visible"
            variants={slideInTop}
            transition={{ delay: 0.2 }}
          />
        </div>

        <motion.div
          className='flex flex-wrap justify-center gap-8 mx-10 pt-12'
          initial="hidden"
          animate="visible"
          variants={zoomIn}
        >
          {filteredCommunities.length > 0 ? (
            filteredCommunities.map((community, index) => (
              <motion.div 
                key={index}
                className="backdrop-blur-md bg-white/10 rounded-lg p-4 w-full sm:w-[22%]"
                variants={zoomIn}
                whileHover={wobbleHover.whileHover}
              >
                <motion.img
                  src={community.image}
                  alt="Uploaded NFT"
                  className='rounded-md w-full'
                  variants={fadeRotateIn}
                  initial="hidden"
                  animate="visible"
                />
                <p className='text-white pt-4 text-center'>
                  {community.name || "Your Memes, Your NFT"}: {community.description || "Join the Digital Art Revolution"}
                </p>
              </motion.div>
            ))
          ) : (
            <p className="text-white text-center">No communities found.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
