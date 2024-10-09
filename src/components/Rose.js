import React from 'react';
import roseImage from '../assets/rose-bloomed.gif'; // Import your rose image

const Rose = ({ onClick }) => {
  return (
    <div>
      <img 
        src={roseImage} 
        alt="Rose" 
        onClick={onClick} // Set up the click event handler
        className="w-screen h-screen object-cover cursor-pointer" // Full screen and pointer cursor
      />
    </div>
  );
};

export default Rose;
