"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';


interface StoryItem {
  title: string;
  preview: string;
  image: string; 
  href: string; 
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

const StoryCard = ({ story, index }: { story: StoryItem, index: number }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Link 
            href={story.href} 
            className={`
                block bg-white border-4 border-black rounded-xl w-full text-left
                shadow-[8px_8px_0px_0px_rgb(236,72,153)] transition-all duration-150 ease-out cursor-pointer
                hover:shadow-[10px_10px_0px_0px_rgb(236,72,153)]
                active:shadow-[2px_2px_0px_0px_rgb(236,72,153)]
                active:translate-x-[6px] active:translate-y-[6px]
                transform min-h-[440px] flex flex-col {/* Standardized height for vertical alignment */}
                ${isPressed ? 'translate-x-[6px] translate-y-[6px]' : ''}
            `}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)} 
        >
           
            <div className="flex flex-col flex-grow">
              
             <div className="w-full relative h-48 rounded-t-lg overflow-hidden border-b-4 border-black">
                <Image 
                  src={story.image} 
                  alt={story.title} 
                  fill 
                  style={{ objectFit: "cover" }} 
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
              </div>

              
              <div className="p-4 sm:p-6 flex flex-col flex-grow space-y-3">
          
                <div className="flex-grow"></div> 

                
                <h4 className="text-2xl font-extrabold text-black leading-tight">{story.title}</h4>
                <p className="text-base text-gray-700">{story.preview}</p>
              </div>

            </div>
        </Link>
    );
};


export default function Home() {
  const stories: StoryItem[] = [

    { 
      title: "My Journey into Web Development", 
      preview: "Discover my background, skills, and professional experience.", 
      image: "/tech.jpg", 
      href: "/about" 
    },
    { 
      title: "Education Milestones", 
      preview: "See my academic path and qualifications from Primary to Tertiary.", 
      image: "/educ.jpg", 
      href: "/education" 
    },
    { 
      title: "Things I Enjoy", 
      preview: "A look into my favorite personal activities and free time projects.", 
      image: "/hb.jpg", 
      href: "/hobbies" 
    },
    { 
      title: "Let's Connect!", 
      preview: "Get in touch with me via email or social media.", 
      image: "/cn.png", 
      href: "/contact" 
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
          <span className="text-3xl font-extrabold text-black tracking-tighter hidden sm:block">
            My Personal Website
          </span>
        </div>
        
        <nav className="flex gap-4">
          <NavLink href="/" text="Home" active={true} />
          <NavLink href="/about" text="About" />
          <NavLink href="/education" text="Education" />
          <NavLink href="/hobbies" text="Hobbies" />
          <NavLink href="/contact" text="Contact" />
        </nav>
      </header>

      <main className="flex-grow py-20 px-6 sm:px-12 text-center">
        <h1 className="text-5xl font-extrabold text-pink-500 mb-12 tracking-wide inline-block relative">
          Welcome to My Site
          
          <span className="absolute bottom-[-10px] left-0 w-full h-2 bg-black"></span>
        </h1>
        
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16">
          I'm thrilled to share my journey, skills, and passions with you. Click on a story below to dive deeper into who I am!
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stories.map((story, i) => (
            <StoryCard key={i} story={story} index={i} />
          ))}
        </div>
      </main>

      
      <footer className="bg-pink-500 text-white text-center py-5 text-sm font-light border-t-4 border-black shadow-lg">
        &copy; {new Date().getFullYear()} My Personal Website |
      </footer>
    </div>
  );
}