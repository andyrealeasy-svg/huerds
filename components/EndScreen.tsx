import React from 'react';

export const EndScreen: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 animate-in fade-in duration-1000">
      <div className="text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
          VOTING CLOSED
        </h2>
        <div className="w-16 h-0.5 bg-white mx-auto opacity-30" />
        <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs md:text-sm">
          See you at the ceremony
        </p>
      </div>
    </div>
  );
};