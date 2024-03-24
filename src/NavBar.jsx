import  { useState } from 'react';
import RaghuLogo from "./assets/images/raghu-logo.png";
import ProfileLogo from "./assets/icons/profile.svg"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-black mr-4">
            <img src={RaghuLogo} className="w-[200px] rounded-xl" alt="Raghu Enggineering College" />
          </a>
        </div>
        <div className="md:hidden flex flex-row">
            <div className='md:hidden mr-6'><a href="#" className="text-black text-xl font-medium"><img src={ProfileLogo} alt="Profile" className='rounded-full size-12'/></a></div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          
        </div>
        <div className="hidden md:flex items-center">
          <a href="#" className="text-black text-xl font-medium mr-4 pr-2">About</a>
          <a href="#" className="text-black text-xl font-medium"><img src={ProfileLogo} alt="Profile" className='size-8'/></a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-black py-2">About</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;