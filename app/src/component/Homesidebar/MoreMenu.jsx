import React, { useState, useRef, useEffect } from 'react';

export default function MoreMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m5.196-15.804L13.5 6.891m-3 3.305l-3.696 3.696M23 12h-6m-6 0H1m15.804 5.196l-3.695-3.696m-3.305-3-3.696-3.696"/>
        </svg>
      ),
      label: 'Settings',
      divider: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      label: 'Your activity',
      divider: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
      ),
      label: 'Saved',
      divider: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      ),
      label: 'Switch appearance',
      divider: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      ),
      label: 'Report a problem',
      divider: true
    }
  ];

  const bottomItems = [
    {
      label: 'Switch accounts',
      divider: true
    },
    {
      label: 'Log out',
      divider: false
    }
  ];

  const MenuItem = ({ item, onClick, hasIcon = true }) => (
    <>
      <button
        onClick={onClick}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors text-left"
      >
        {hasIcon && item.icon && <div className="text-white">{item.icon}</div>}
        <span className="text-white text-sm">{item.label}</span>
      </button>
      {item.divider && <div className="border-t border-gray-700 my-1"></div>}
    </>
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Sidebar container */}
      <div className="w-64 bg-black border-r border-gray-800 h-screen flex flex-col relative" ref={menuRef}>
        {/* Navigation items would go here */}
        <div className="flex-1"></div>
        {/* More button and menu */}
        <div className="relative px-3 py-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${
              isMenuOpen ? 'bg-gray-900' : 'hover:bg-gray-900'
            }`}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"/>
              <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2"/>
              <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2"/>
            </svg>
            <span className="text-white text-base">More</span>
          </button>



          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute bottom-full left-3 right-3 mb-2 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 animate-slideUp">
              {/* Main menu items */}
              <div className="py-1">
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    onClick={() => {
                      console.log(`Clicked: ${item.label}`);
                      setIsMenuOpen(false);
                    }}
                  />
                ))}
              </div>

              {/* Bottom items without icons */}
              <div className="py-1">
                {bottomItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    hasIcon={false}
                    onClick={() => {
                      console.log(`Clicked: ${item.label}`);
                      setIsMenuOpen(false);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}