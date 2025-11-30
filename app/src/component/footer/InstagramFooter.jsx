import React, { useState } from 'react';
import { FooterPageIcon } from '../../assets/Icons';

export default function InstagramFooter() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const footerLinks = [
    'Meta',
    'About',
    'Blog',
    'Jobs',
    'Help',
    'API',
    'Privacy',
    'Terms',
    'Locations',
    'Instagram Lite',
    'Meta AI',
    'Meta AI Articles',
    'Threads',
    'Contact Uploading & Non-Users',
    'Meta Verified'
  ];

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Russian',
    'Japanese',
    'Korean',
    'Chinese'
  ];

  return (
    <footer className="bg-black py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-[#A8A8A8] hover:underline text-xs transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#A8A8A8]">
          {/* Language Selector */}
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-black text-[#A8A8A8] border-none outline-none cursor-pointer text-xs  appearance-none"
            >
              {languages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          <FooterPageIcon />
          </div>

          {/* Copyright */}
          <div className="text-center">
            © 2025 Instagram from Meta
          </div>
        </div>
      </div>
    </footer>
  );
}