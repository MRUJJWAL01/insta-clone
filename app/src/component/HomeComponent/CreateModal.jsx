import { useEffect, useRef } from "react";
import { AIStudioIcon, PostIcon } from "../../assets/Icons";


//ksdf ksadf kasfaskdfj sadfk

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