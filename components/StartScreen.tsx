import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 z-10 relative">
      <h1 className="text-6xl md:text-8xl font-display font-bold text-center tracking-tighter mb-8 text-white mix-blend-difference animate-in fade-in zoom-in duration-1000">
        HUEVKI<br/>AWARDS<br/><span className="text-neutral-500">2026</span>
      </h1>
      
      <button 
        onClick={onStart}
        className="group relative px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-neutral-200 transition-all duration-300"
      >
        <span className="relative z-10">Initialize Sequence</span>
        <div className="absolute inset-0 bg-white blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </button>

      <div className="absolute bottom-8 text-[10px] text-neutral-600 uppercase tracking-[0.2em] animate-pulse">
        System Ready
      </div>
    </div>
  );
};