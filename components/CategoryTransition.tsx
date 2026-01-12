import React, { useEffect, useState } from 'react';

interface CategoryTransitionProps {
  title: string;
}

export const CategoryTransition: React.FC<CategoryTransitionProps> = ({ title }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure mount animation triggers
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [title]);

  return (
    <div className="h-full w-full flex items-center justify-center p-8 relative overflow-hidden">
      <div className={`
        relative z-10 transition-all duration-1000 ease-out transform
        ${visible ? 'opacity-100 scale-100 blur-0 translate-y-0' : 'opacity-0 scale-95 blur-xl translate-y-8'}
      `}>
         <h2 className="text-4xl md:text-7xl font-display font-bold text-center text-white leading-tight uppercase tracking-tighter mix-blend-overlay">
           {title}
         </h2>
         {/* Decoration lines */}
         <div className={`absolute -left-12 top-1/2 w-8 h-[2px] bg-white transition-all duration-1000 delay-300 ${visible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />
         <div className={`absolute -right-12 top-1/2 w-8 h-[2px] bg-white transition-all duration-1000 delay-300 ${visible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />
      </div>
      
      {/* Background large ghost text */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] text-[20vh] font-display font-bold uppercase select-none pointer-events-none transition-transform duration-[3s] ${visible ? 'scale-110' : 'scale-100'}`}>
        {title}
      </div>
    </div>
  );
};