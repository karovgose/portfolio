'use client';
import { useThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white dark:bg-gray-950 w-[3rem] h-[3rem] rounded-full bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all duration-300"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
