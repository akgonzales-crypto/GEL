"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react'; 
import type { FormEvent } from 'react'; 

const NavLink = ({ href, text, active = false }: { href: string; text: string; active?: boolean }) => (
  <Link 
    href={href} 
    // NavLink also uses a multi-line string, but since it uses a template literal (`...`)
    // and is inside a Client Component, it might not fail, but we'll trim for safety.
    className={`
      py-2 px-4 border-2 border-black rounded-lg text-sm font-bold tracking-wide transition-all duration-150 ease-in-out
      ${active 
        ? 'bg-pink-500 text-white shadow-[4px_4px_0px_0px_#000] active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px]' 
        : 'bg-white text-black shadow-[4px_4px_0px_0px_#000] hover:bg-pink-100 active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px]'
      }
    `.trim()} // 🛠️ Applied .trim() for robust hydration
  >
    {text}
  </Link>
);


interface ContactTileProps {
  href: string;
  icon: string;
  label: string;
  value: string;
}


const ContactTile = ({ href, icon, label, value }: ContactTileProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    // 🛠️ FIX APPLIED: Collapsed the multi-line className string into a single line 
    // to eliminate the source of the hydration error (inconsistent whitespace).
    className="flex items-center p-4 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_#000] transition-all duration-150 ease-in-out hover:bg-pink-100 hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] text-left"
  >
    <span className="text-3xl mr-4 text-pink-500">{icon}</span>
    <div>
      <div className="text-sm font-semibold text-gray-600">{label}</div>
      <div className="text-lg font-bold text-black">{value}</div>
    </div>
  </a>
);

export default function Contact() {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus('Sending message...');
    
    
    setTimeout(() => {
      setIsSubmitting(false);
      setMessageStatus('Message sent successfully! Thank photo you.');
    
    }, 1500);
  };

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
          <NavLink href="/hobbies" text="Hobbies" />
          <NavLink href="/contact" text="Contact" active={true} />
        </nav>
      </header>

      
      <main className="flex flex-col items-center flex-grow py-20 px-6">
        <div className="bg-white border-4 border-black rounded-xl p-10 max-w-4xl w-full shadow-[8px_8px_0px_0px_rgb(236,72,153)]">
          <h1 className="text-5xl font-extrabold text-pink-500 mb-4 tracking-wide text-center">
            Let's Talk!
          </h1>
          <p className="text-xl text-gray-700 mb-10 text-center">
            Ready to collaborate or just want to say hello? Find me below or send a quick message.
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            
            <ContactTile 
              icon="📧" 
              label="Email Address" 
              value="akgonzales@gbox.ncf.edu.ph"
              href="mailto:akgonzales@gbox.ncf.edu.ph"
            />
            <ContactTile 
              icon="📧" 
              label="Email Address" 
              value="angelkrissagonzales@gmail.com"
              href="mailto:angelkrissagonzales@gmail.com"
            />
            <ContactTile 
              icon="📱" 
              label="Phone Number" 
              value="09121163030"
              href="tel:09121163030"
            />

            
            
            <ContactTile 
              icon="📘" 
              label="Facebook" 
              value="Angel Krissa Gonzales" 
              href="https://www.facebook.com/angelkrissa.gonzales" 
            />
            
          </div>

          
          <h2 className="text-3xl font-bold text-black border-b-2 border-pink-500 pb-2 mb-6">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-black mb-1">Your Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                className="w-full p-3 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none transition-shadow" 
                placeholder="Enter your name"
              />
            </div>

            
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-black mb-1">Your Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="w-full p-3 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none transition-shadow" 
                placeholder="Enter your email"
              />
            </div>

            
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-black mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                required 
                className="w-full p-3 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none transition-shadow resize-none" 
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            
            {messageStatus && (
              <p className={`text-center font-semibold py-2 ${messageStatus.includes('successfully') ? 'text-green-600 bg-green-100' : 'text-pink-600 bg-pink-100'} border-2 border-black rounded-lg`}>
                {messageStatus}
              </p>
            )}

            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`
                w-full bg-pink-500 text-white font-bold py-3 px-8 border-2 border-black rounded-lg text-lg shadow-[4px_4px_0px_0px_#000] transition-all 
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'hover:bg-pink-600 active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px]'
                }
              `.trim()} // 🛠️ Applied .trim() for robust hydration
            >
              {isSubmitting ? 'Sending...' : 'Send Message Now'}
            </button>
          </form>
        </div>
      </main>

      
      <footer className="bg-pink-500 text-white text-center py-5 text-sm font-light border-t-4 border-black shadow-lg">
        &copy; {new Date().getFullYear()} My Personal Website 
      </footer>
    </div>
  );
}