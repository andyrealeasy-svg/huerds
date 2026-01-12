import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-neutral-950 overflow-hidden">
      {/* Soft Gradient Spots */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-neutral-800/20 rounded-full blur-[120px] animate-slow-pan opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-neutral-900/40 rounded-full blur-[100px] animate-pulse opacity-50" />
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-neutral-800/10 rounded-full blur-[80px]" />

      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-20" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
    </div>
  );
};