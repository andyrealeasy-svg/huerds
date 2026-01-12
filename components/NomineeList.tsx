import React from 'react';
import { Category, Nominee } from '../types';

interface NomineeListProps {
  category: Category;
  visibleCount: number;
}

export const NomineeList: React.FC<NomineeListProps> = ({ category, visibleCount }) => {
  return (
    <div className="h-full w-full flex flex-col pt-24 pb-12 px-8 md:px-24 relative max-w-7xl mx-auto">
      {/* Category Header (Small) */}
      <div className="absolute top-8 left-8 md:left-24 flex items-center gap-4 opacity-50">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
          {category.title}
        </h3>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
        {category.nominees.map((nominee, index) => (
          <NomineeItem 
            key={nominee.id} 
            nominee={nominee} 
            isVisible={index < visibleCount}
            isFocus={index === visibleCount - 1} 
          />
        ))}
      </div>
    </div>
  );
};

const NomineeItem: React.FC<{ nominee: Nominee; isVisible: boolean; isFocus: boolean }> = ({ nominee, isVisible, isFocus }) => {
  return (
    <div 
      className={`
        transform transition-all duration-1000 ease-out
        ${isVisible 
          ? 'opacity-100 translate-x-0 blur-0' 
          : 'opacity-0 -translate-x-12 blur-sm'
        }
      `}
    >
      <div className="flex flex-col items-start group">
        <div className="flex items-baseline gap-4">
           {/* Bullet point that glows when focused (most recently revealed) */}
           <div className={`w-1.5 h-1.5 bg-white transition-all duration-500 mt-3 ${isFocus ? 'opacity-100 shadow-[0_0_10px_white]' : 'opacity-20'}`} />
           
           <h4 className={`
             text-2xl md:text-5xl font-bold uppercase tracking-tight transition-colors duration-500
             ${isFocus ? 'text-white' : 'text-neutral-500'}
           `}>
             {nominee.primaryText}
           </h4>
        </div>
        
        {nominee.secondaryText && (
          <p className={`
             ml-6 mt-1 text-sm md:text-lg font-light tracking-widest uppercase transition-all duration-700 delay-100
             ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'}
             ${isFocus ? 'text-neutral-300' : 'text-neutral-600'}
          `}>
            {nominee.secondaryText}
          </p>
        )}
      </div>
    </div>
  );
};