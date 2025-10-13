import { useEffect, useRef } from "react";
const AIStudioIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="8" cy="8" r="2" strokeWidth="2"/>
    <circle cx="16" cy="8" r="2" strokeWidth="2"/>
    <circle cx="8" cy="16" r="2" strokeWidth="2"/>
    <circle cx="16" cy="16" r="2" strokeWidth="2"/>
  </svg>
);
const PostIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
    <line x1="9" y1="9" x2="15" y2="9" strokeWidth="2"/>
    <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2"/>
  </svg>
);
const CreateModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-[64%] left-[8%] z-200">
      <div
        ref={modalRef}
        className="bg-zinc-800 text-white rounded-md shadow-2xl w-48 overflow-hidden"
      >
        <button
          onClick={() => console.log('Post clicked')}
          className="w-full flex items-center justify-between px-4 py-2 hover:bg-zinc-700 transition-colors"
        >
          <span className="text-base">Post</span>
          <PostIcon />
        </button>
        <div className="h-px bg-zinc-700"></div>
        <button
          onClick={() => console.log('AI clicked')}
          className="w-full flex items-center justify-between px-4 py-2 hover:bg-zinc-700 transition-colors"
        >
          <span className="text-base">AI</span>
          <AIStudioIcon />
        </button>
      </div>
    </div>
  );
};

export default CreateModal;