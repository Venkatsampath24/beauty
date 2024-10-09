import React, { useState } from 'react';

const FinalMessage = () => {
  const [hearts, setHearts] = useState([]);

  const handleClick = () => {
    const newHeart = { id: Date.now() };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    // Set timeout to match the animation duration
    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter(heart => heart.id !== newHeart.id));
    }, 2000); // Adjust this duration to match your animation duration
  };

  return (
    <div className="flex flex-col items-center justify-center absolute inset-0 bg-white bg-opacity-80 rounded-lg shadow-lg p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
      😍🧚‍♀️You are beautiful than 🌹!
      </h2>
      <p className="text-gray-600 mb-6">
        Just like a rose, your beauty shines brightly in ..... life.
      </p>
      <button 
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        onClick={handleClick}
      >
        click 
      </button>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-red-500 text-2xl animate-float"
            style={{
              left: Math.random() * 100 + 'vw',
              bottom: '0',
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalMessage;
