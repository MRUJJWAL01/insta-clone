import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logOutUserApi } from "../../features/actions/AuthAction";

// Reusable Dropdown Menu Component
const DropdownMenu = ({ isOpen, onClose, items, position = 'bottom' }) => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const hendleClick = (label)=>{
    if(label==="Log out"){
        logOutUser();
    }


  }

  const logOutUser = async()=>{
    try {
        dispatch(logOutUserApi());
        alert("user logged out!");
    } catch (error) {
        console.log(error);
        
    }

  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <div
      ref={menuRef}
      className={`fixed ${position === 'bottom' ? 'bottom-30' : 'bottom-18'} left-5 bg-zinc-800 text-white rounded-2xl shadow-2xl w-72 overflow-hidden z-50`}
    >
      {items.map((item, index) => (
        <div key={index}>
          {item.type === 'separator' ? (
            <div className="h-2 bg-zinc-900"></div>
          ) : (
            <button
              onClick={()=> hendleClick(item.label)}
              className="w-full flex items-center gap-4 px-4 py-3 hover:bg-zinc-700 transition-colors text-left"
            >
              {item.icon && <item.icon className="w-6 h-6" />}
              <span className="text-base">{item.label}</span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
