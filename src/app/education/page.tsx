"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';


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


interface EducationItem {
  level: string;
  institution: string;
  degree?: string; 
  logoSrc: string; 
}


const EducationCard = ({ item, index }: { item: EducationItem, index: number }) => {
  
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`
        relative w-full bg-white border-4 border-black rounded-xl p-6 mb-6
        shadow-[8px_8px_0px_0px_#000] transition-all duration-300 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:bg-gray-50 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000]
      `}
      
    >
      
      <div className="absolute -top-4 -right-4 bg-pink-500 text-white font-bold py-1 px-4 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000] transform rotate-3 z-10">
        {item.level}
      </div>

      <div className="flex items-start text-left gap-4">
        
        
        <Image 
          src={item.logoSrc} 
          alt={`${item.institution} logo`} 
          width={48} 
          height={48} 
          className="rounded-lg object-contain border-2 border-black p-1 bg-white flex-shrink-0" 
        />

        <div className="flex-grow">
          <h3 className="text-2xl font-extrabold text-black mb-1 leading-tight">{item.institution}</h3>
          {item.degree && (
              <h4 className="text-lg font-bold text-pink-600 mb-0">{item.degree}</h4>
          )}
          
          
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  const educationData: EducationItem[] = [
    
    {
      level: "Primary",
      institution: "Naga Central School 1",
      logoSrc: "/NCS1.jpg" 
    },
    
    {
      level: "Secondary",
      institution: "Camarines Sur National High School",
      logoSrc: "/CSNH.JPG"
    },
    
    {
      level: "Tertiary",
      institution: "Naga College Foundation",
      degree: "Bachelor of Science in Information Technology",
      logoSrc: "/NCF..jpg" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-pink-50 font-sans">
      
      
      <header className="sticky top-0 z-20 flex justify-between items-center bg-pink-300 px-8 py-4 shadow-lg border-b-4 border-black">
        <div className="flex items-center gap-4">
          <Image 
            src="/krissa.jpg" 
            alt="Logo" 
            width={72} 
            height={72} 
            className="rounded-full border-4 border-black object-cover shadow-[4px_4px_0px_0px_#000] transition-transform hover:scale-105" 
          />
         
          <span className="text-3xl font-extrabold text-black tracking-tighter hidden sm:block">
            My Personal Website
          </span>
        </div>
        
        <nav className="flex gap-4">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/education" text="Education" active={true} />
          <NavLink href="/hobbies" text="Hobbies" />
          <NavLink href="/contact" text="Contact" />
        </nav>
      </header>


      <main className="flex flex-col items-center flex-grow py-20 px-6">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-5xl font-extrabold text-pink-500 mb-12 tracking-wide inline-block relative">
            My Education
            
            <span className="absolute bottom-[-10px] left-0 w-full h-2 bg-black"></span>
          </h1>

          <div className="space-y-8 w-full">
            {educationData.map((item, index) => (
              <EducationCard key={index} item={item} index={index} />
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