import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'about', label: 'نبذة' },
  { id: 'education', label: 'التعليم' },
  { id: 'experience', label: 'الخبرات' },
  { id: 'skills', label: 'المهارات' },
  { id: 'certifications', label: 'الشهادات' },
  { id: 'languages', label: 'اللغات' },
  { id: 'contact', label: 'تواصل' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur border-b border-gray-100 z-50">
      <nav className="container-responsive flex items-center justify-between py-4">
        <a href="#hero" className="text-primary font-extrabold text-xl">صلاح الدين جبريل</a>
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="القائمة">
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
        <ul className="hidden md:flex items-center gap-6 text-gray-700">
          {navItems.map((item) => (
            <li key={item.id}>
              <a className="hover:text-primary" href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="container-responsive grid gap-4 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a className="block py-2 hover:text-primary" href={`#${item.id}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}