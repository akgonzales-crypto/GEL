"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react'; 
const NavLink = ({ href, text, active = false }: { href: string; text: string; active?: boolean }) => (
  <Link 
    href={href} 
    
    className={`
      py-2 px-4 border-2 border-black rounded-lg text-sm font-bold tracking-wide transition-all duration-150 ease-in-out
      ${active 
        ? 'bg-pink-500 text-white shadow-[4px_4px_0px_0px_#000] active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px]' 
        : 'bg-white text-black shadow-[4px_4px_0px_0px_#000] hover:bg-pink-100 active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px]'
      }
    `}
  >
    {text}
  </Link>
);

export default function About() {
  
  const [isHovered, setIsHovered] = useState(false);
 
  const [activeFact, setActiveFact] = useState<number | null>(null);


  return (
    
    <div className="min-h-screen flex flex-col bg-pink-50 font-sans">
      
      
      <header className="sticky top-0 z-20 flex justify-between items-center bg-pink-300 px-8 py-4 shadow-lg border-b-4 border-black">
        <div className="flex items-center gap-4">
         
          <Image 
            src="/pic1.jpg" 
            alt="Logo" 
            width={72} 
            height={72} 
            className="rounded-full border-4 border-black object-cover shadow-[4px_4px_0px_0px_#000] transition-transform hover:scale-105" 
          />
          <span className="text-3xl font-extrabold text-black tracking-tighter">
            My Personal Website
          </span>
        </div>
        
       
        <nav className="flex gap-4">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" active={true} />
          <NavLink href="/education" text="Education" />
          <NavLink href="/hobbies" text="Hobbies" />
          <NavLink href="/contact" text="Contact" />
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow py-20 px-6 space-y-12">
        
        <div 
          className={`
            bg-white border-4 border-black rounded-xl p-10 max-w-4xl text-center transition-all duration-300 ease-out 
            ${isHovered 
              ? 'shadow-[12px_12px_0px_0px_rgb(236,72,153)] transform scale-[1.01]' 
              : 'shadow-[8px_8px_0px_0px_rgb(236,72,153)]'
            }
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          
          style={{ transform: isHovered ? 'perspective(1000px) rotateY(3deg) rotateX(3deg)' : 'none' }}
        >
          <h1 className="text-5xl font-extrabold text-pink-500 mb-8 tracking-wide">
            <span role="img" aria-label="wave"></span> About Me
          </h1>
          <Image 
            src="/pic1.jpg" 
            alt="Profile Pic" 
            width={160} 
            height={160} 
            className="mx-auto rounded-full mb-8 object-cover border-4 border-black shadow-[4px_4px_0px_0px_#000] transition-transform hover:scale-110 hover:rotate-2" 
          />
          <p className="text-2xl text-gray-800 leading-relaxed max-w-2xl mx-auto mb-10">
            Hi! I'm Angel Krissa,a 2nd year IT student at Naga College Foundation Inc.
            I'm someone who values solitude and finds strength in enjoying my own company
            I thrive on self-reflection, creativity, and independence, and I believe that quiet moments are powerful for growth.
            My approach to life is grounded in balance — appreciating both meaningful connections and the peace of being alone.
          </p>
          
          
          
         
        
        </div>

       
        
      </main>

      
      <footer className="bg-pink-500 text-white text-center py-5 text-sm font-light border-t-4 border-black shadow-lg">
        &copy; {new Date().getFullYear()} My Personal Website 
      </footer>
    </div>
  );
}