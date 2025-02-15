import React, { useState } from 'react';
import '../../index.css';
import SignInUp from '../SignInUp/signInUp.jsx';
import './header.css';

export default function Header() {
  const [showSignInUp, setShowSignInUp] = useState(false);

  const handleSignInClick = () => {
    console.log('Sign In/Up button clicked');
    setShowSignInUp(true);
  };

  return (
    <div className="header bg-white h-[10vh] text-[var(--textColor)] flex justify-center items-center px-4 relative shadow-xl">
      <img src="" alt="Logo Placeholder" />
      <div className="absolute right-0 p-[2vw] ">
        <button
          onClick={handleSignInClick}
          className="signInUpButton bg-[var(--secondaryColor)] flex justify-center items-center cursor-pointer border border-[var(--borderColor)] overflow-hidden relative m-0 p-[17px_35px] outline-none no-underline uppercase shadow-xl"
        >
          <p className="text-white ">Sign Up</p>
        </button>
      </div>
      {showSignInUp && <SignInUp />}
    </div>
  );
}