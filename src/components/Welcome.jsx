import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

const Welcome = () => {
  const [color, setColor] = useState('#FFFFFF');
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = getRandomColor();
      setColor(randomColor);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [color]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let result = '#';
    for (let i = 0; i < 6; i++) {
      result += letters[Math.floor(Math.random() * 16)];
    }
    return result;
  };

  return (
    <div className='welcome h-screen w-full flex flex-col gap-10 items-center justify-center px-8 lg:fixed lg:w-[30%]'>
          <svg viewBox="0 0 372 193" fill="none" xmlns="http://www.w3.org/2000/svg" className='written'>
          <path d="M51 41.9998C65 7.49984 106.5 -10.0002 99 41.9998C90.0294 104.196 28.3333 164 8 184" stroke="#6901A9" strokeWidth="15" strokeLinecap="round"/>
          <path d="M77.5 102C120.5 94 193.313 63.5462 202 47C212.5 27 189.333 11.6667 181 8" stroke="#6901A9" strokeWidth="15" strokeLinecap="round"/>
          <path d="M73.5 105C70.5 140.5 91.5274 209.182 125.833 178.357C160.14 147.531 152.861 125.312 148.349 118.209C142.5 109 128.861 112.5 127 119.721C121 143 188.5 134 198 131.5C207.5 129 215.5 128 214.5 117.5C212 107 199 108.5 192.5 119.721C178 149 140.793 191.542 179.5 184C222.057 175.707 275.811 102.778 268.443 118.209C255.471 145.377 225.413 197.957 271 178.357C312.658 160.446 330.891 109.555 341.763 118.209C373.5 140.5 373.653 203.011 341.763 178.357C319.612 161.231 277.391 106.978 281.755 95" stroke="url(#paint0_linear_0_1)" strokeWidth="12" strokeLinecap="round"/>
          <defs>
          <linearGradient id="paint0_linear_0_1" x1="92.8048" y1="118.235" x2="412" y2="116.884" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6901A9"/>
          <stop offset="0.479167" stopColor="#90A9D9"/>
          <stop offset="1" stopColor="white"/>
          </linearGradient>
          </defs>
          </svg>
        <div className='flex flex-col md:justify-center w-full gap-8 animate-opacity'>
          <h1 className="text-5xl lg:text-7xl font-bold opacity-100">Hi there,</h1>
          <h2 className="text-xl lg:text-3xl font-bold opacity-70 leading-relaxed">my name is Kristián Michalik. I am a junior fullstack developer from Slovakia
          that makes sure your website feels <span className={`text-2xl lg:text-4xl font-bold transition-all duration-700`} style={{color: color}}>yours</span> </h2>
        </div>
        <Navbar />
    </div>
  )
}

export default Welcome