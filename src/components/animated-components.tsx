'use client';
import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
export function ScrollBar() {
  return (
    <span className="relative p-1 w-0.2 rounded-xl h-14 flex justify-center bg-zinc-500 self-center mt-12">
      <span className="bg-zinc-300 w-2 h-1/2  rounded-xl absolute scroll-bar"></span>
    </span>
  );
}

export function ThemeSwitch() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (document.body.classList.contains('light-theme')) {
      return 'light';
    } else {
      return 'dark';
    }
  });
  function handleTheme() {
    if (theme === 'dark') {
      document.body.classList.add('light-theme');
      setTheme('light');
    } else {
      document.body.classList.remove('light-theme');
      setTheme('dark');
    }
  }
  return (
    <button
      onClick={() => handleTheme()}
      className={`
        relative
        flex items-center
        w-14 h-8
        px-1
        rounded-full
        transition-colors duration-300
        ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-300'}
      `}
    >
      <span
        className={`
          absolute
          
          flex items-center justify-center
          
          w-6 h-6
          
          rounded-full
          
          bg-white
          
          transition-transform duration-300
          
          ${theme === 'dark' ? 'translate-x-0' : 'translate-x-6'}
        `}
      >
        {theme === 'dark' ? <Moon size={14} className="text-black" /> : <Sun size={14} className="text-black" />}
      </span>
    </button>
  );
}
