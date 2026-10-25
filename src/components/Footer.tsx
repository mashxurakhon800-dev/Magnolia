import React from 'react';
import { Clock } from 'lucide-react';
import { Language } from '../types/menu';
import { RESTAURANT_INFO } from '../data/menuData';

interface FooterProps {
  currentLanguage: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  return (
    <footer id="contacts" className="bg-[#120508] border-t border-[#381219] text-[#C7B7A3] text-xs py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <img
              src="/magnolia-logo.png"
              alt="Magnolia"
              className="w-7 h-7 object-contain rounded-full border border-[#D4AF37]/50"
            />
            <span className="font-cinzel text-lg font-bold tracking-[0.2em] text-[#FAF5EE]">
              {RESTAURANT_INFO.name}
            </span>
          </div>
          <p className="text-[11px] text-[#A89280]">
            {RESTAURANT_INFO.subname}
          </p>
        </div>

        {/* Hours */}
        <div className="flex items-center justify-center text-[11px]">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{RESTAURANT_INFO.workHours[currentLanguage]}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-[#7A645A]">
          © {new Date().getFullYear()} Magnolia Restaurant
        </div>
      </div>
    </footer>
  );
};
