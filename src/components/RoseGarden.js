import React, { useState, useEffect } from 'react';
import Rose from './Rose';
import FinalMessage from './FinalMessage';
import music from '../assets/Rojalove.mp3'; // Import background music

const RoseGarden = () => {
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const newAudio = new Audio(music);
    newAudio.loop = true; // Loop the music
    setAudio(newAudio);

    // Play audio only after user interaction
    const handleUserInteraction = () => {
      newAudio.play().then(() => {
        setIsAudioPlaying(true); // Update audio playing state
      }).catch((error) => console.error("Audio play failed:", error));
      window.removeEventListener('click', handleUserInteraction); // Remove the listener after first interaction
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      newAudio.pause(); // Pause the music on unmount
      window.removeEventListener('click', handleUserInteraction); // Clean up listener
    };
  }, [music]);

  const handleRoseClick = () => {
    setShowFinalMessage(true); // Show the final message when the rose is clicked
  };

  return (
    <div className="relative">
      <Rose onClick={handleRoseClick} /> {/* Trigger final message on click */}
      {showFinalMessage && <FinalMessage />} {/* Display message if state is true */}
    </div>
  );
};

export default RoseGarden;
