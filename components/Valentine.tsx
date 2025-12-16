import React, { useState } from 'react';
import { NO_PHRASES, IMAGES } from '../constants';
import Confetti from './Confetti';

const Valentine: React.FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    return NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)];
  };

  const getImage = () => {
    if (noCount === 0) return IMAGES.init;
    // Cycle through sad images, clamping to the last one if we run out
    const index = Math.min(noCount - 1, IMAGES.sad.length - 1);
    return IMAGES.sad[index];
  };

  if (yesPressed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center animate-fade-in relative z-10">
        <Confetti />
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 max-w-md w-full flex flex-col items-center">
          <img
            src={IMAGES.success}
            alt="Success"
            className="rounded-lg shadow-md mb-6 w-full max-w-[250px] object-cover"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-rose-600 mb-4 font-['Varela_Round']">
            Yay! I knew you would say yes! ❤️
          </h1>
          <p className="text-xl text-rose-400 font-['Varela_Round']">I love you 3000 more</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden relative">
      <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50 max-w-lg w-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
        <img
          src={getImage()}
          alt="Valentine"
          className="rounded-xl shadow-lg mb-8 w-full max-w-[220px] h-[220px] object-cover transition-transform hover:scale-105 duration-300"
        />
        
        <h1 className="text-3xl md:text-5xl font-bold text-rose-600 mb-8 leading-tight font-['Varela_Round']">
          Will you be my မုယ ?
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full relative z-10">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 transform active:scale-95"
            style={{ fontSize: noCount * 20 + 16 }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>

          <button
            onClick={handleNoClick}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-rose-300 min-w-[100px] transform active:scale-95"
          >
            {noCount === 0 ? "No" : getNoButtonText()}
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-rose-400 text-sm font-medium opacity-80">
        Made with ❤️
      </div>
    </div>
  );
};

export default Valentine;