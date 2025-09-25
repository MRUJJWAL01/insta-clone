import React, { useState } from 'react';

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
              className="bg-black text-[#A8A8A8] border-none outline-none cursor-pointer text-xs pr-6 appearance-none"
            >
              {languages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 text-[#A8A8A8] pointer-events-none"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
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