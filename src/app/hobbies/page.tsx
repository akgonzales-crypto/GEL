"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';


interface HobbyItem {
  name: string;
  icon: string;
}


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

const HobbyCard = ({ hobby }: { hobby: HobbyItem }) => {
    
    const [isPressed, setIsPressed] = useState(false);

    return (
        <div
            className={`
                bg-white border-4 border-black rounded-xl p-6 text-center w-full h-full flex flex-col items-center justify-center
                shadow-[6px_6px_0px_0px_#000] transition-all duration-150 ease-out cursor-pointer min-h-[150px]
                hover:bg-pink-100 hover:shadow-[8px_8px_0px_0px_#000]
                active:shadow-[2px_2px_0px_0px_#000] 
                ${isPressed ? 'translate-x-[4px] translate-y-[4px]' : ''}
            `}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)} 
        >
            <span className="text-5xl mb-3" role="img" aria-label={hobby.name}>{hobby.icon}</span>
          
            <h3 className="text-xl font-extrabold text-black leading-snug tracking-tight">{hobby.name}</h3>
            
        </div>
    );
};


export default function Hobbies() {
  const hobbiesData: HobbyItem[] = [
    { 
      name: "Yoga", 
      icon: "🧘‍♀️"
    },
    { 
      name: "Travelling", 
      icon: "✈️"
    },
    { 
      name: "Podcasts", 
      icon: "🎧"
    },
    { 
      name: "Reading Manhwa & Wattpad", 
      icon: "📖"
    },
    { 
      name: "Cooking", 
      icon: "🍳"
    },
    { 
      name: "Self-Improvement & Self-Care", 
      icon: "✨"
    },
    { 
      name: "Doing My Nails", 
      icon: "💅"
    },
    { 
      name: "Listening to Music", 
      icon: "🎧"
    },
  ];

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
          <NavLink href="/about" text="About" />
          <NavLink href="/education" text="Education" />
          <NavLink href="/hobbies" text="Hobbies" active={true} />
          <NavLink href="/contact" text="Contact" />
        </nav>
      </header>

     
      <main className="flex flex-col items-center flex-grow py-20 px-6">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-5xl font-extrabold text-pink-500 mb-12 tracking-wide inline-block relative">
            Things I Enjoy
            
            <span className="absolute bottom-[-10px] left-0 w-full h-2 bg-black"></span>
          </h1>

          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {hobbiesData.map((hobby, index) => (
              <HobbyCard key={index} hobby={hobby} />
            ))}
          </div>

        </div>
      </main>

     
      <footer className="bg-pink-500 text-white text-center py-5 text-sm font-light border-t-4 border-black shadow-lg">
        &copy; {new Date().getFullYear()} My Personal Website 
      </footer>
    </div>
  );
}