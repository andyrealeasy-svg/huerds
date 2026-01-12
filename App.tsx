import React, { useState, useEffect, useRef } from 'react';
import { Background } from './components/Background';
import { StartScreen } from './components/StartScreen';
import { CategoryTransition } from './components/CategoryTransition';
import { NomineeList } from './components/NomineeList';
import { EndScreen } from './components/EndScreen';
import { AppState } from './types';
import { CATEGORIES, TIME_CATEGORY_TITLE, TIME_PER_NOMINEE, TIME_READING_PAUSE } from './constants';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INTRO);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [visibleNomineeCount, setVisibleNomineeCount] = useState(0);
  
  // Refs for timers to clear them properly
  const timerRef = useRef<number | null>(null);

  const startSequence = () => {
    setAppState(AppState.CATEGORY_TRANSITION);
  };

  const handleCategoryTransition = () => {
    // Show Category Title for X seconds, then switch to Nominees
    timerRef.current = window.setTimeout(() => {
      setAppState(AppState.NOMINEES_REVEAL);
      setVisibleNomineeCount(0); // Reset for new list
    }, TIME_CATEGORY_TITLE);
  };

  const handleNomineeReveal = () => {
    const currentCategory = CATEGORIES[currentCategoryIndex];
    
    if (visibleNomineeCount < currentCategory.nominees.length) {
      // Reveal next nominee
      timerRef.current = window.setTimeout(() => {
        setVisibleNomineeCount(prev => prev + 1);
      }, TIME_PER_NOMINEE);
    } else {
      // All nominees shown, wait for reading time then move to next category
      timerRef.current = window.setTimeout(() => {
        if (currentCategoryIndex < CATEGORIES.length - 1) {
          setCurrentCategoryIndex(prev => prev + 1);
          setAppState(AppState.CATEGORY_TRANSITION);
        } else {
          setAppState(AppState.OUTRO);
        }
      }, TIME_READING_PAUSE);
    }
  };

  useEffect(() => {
    if (appState === AppState.CATEGORY_TRANSITION) {
      handleCategoryTransition();
    } else if (appState === AppState.NOMINEES_REVEAL) {
      handleNomineeReveal();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [appState, visibleNomineeCount, currentCategoryIndex]);

  // Render View based on state
  const renderContent = () => {
    switch (appState) {
      case AppState.INTRO:
        return <StartScreen onStart={startSequence} />;
      
      case AppState.CATEGORY_TRANSITION:
        return <CategoryTransition title={CATEGORIES[currentCategoryIndex].title} />;
      
      case AppState.NOMINEES_REVEAL:
        return (
          <NomineeList 
            category={CATEGORIES[currentCategoryIndex]} 
            visibleCount={visibleNomineeCount} 
          />
        );
      
      case AppState.OUTRO:
        return <EndScreen />;
        
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      <Background />
      <main className="relative z-10 w-full h-full">
        {renderContent()}
      </main>
      
      {/* Progress Bar (Optional UI Polish) */}
      {appState !== AppState.INTRO && appState !== AppState.OUTRO && (
         <div className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-linear opacity-20" 
              style={{ width: `${((currentCategoryIndex) / CATEGORIES.length) * 100}%` }} 
         />
      )}
    </div>
  );
};

export default App;