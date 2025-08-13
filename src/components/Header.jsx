import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'about', label: 'من أنا' },
  { id: 'education', label: 'التعليم' },
  { id: 'experience', label: 'الخبرات' },
  { id: 'skills', label: 'المهارات' },
  { id: 'certifications', label: 'الشهادات' },
  { id: 'languages', label: 'اللغات' },
  { id: 'contact', label: 'تواصل' },
];

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#hero" className="text-primary font-bold text-lg">صلاح الدين جبريل</a>
        <button className="md:hidden" onClick={handleClick} aria-label="toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul className={`flex flex-col md:flex-row gap-4 md:gap-8 absolute md:static bg-white md:bg-transparent right-0 left-0 top-full md:top-auto mx-4 md:mx-0 p-4 md:p-0 transition-all duration-300 ${open ? 'block' : 'hidden md:flex'}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)} className="text-gray-700 hover:text-primary">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;