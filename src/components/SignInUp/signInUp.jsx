import React from 'react';
import '../../index.css';
import Login from './login.jsx';
import Register from './register.jsx';

export default function SignInUp({ onClose }) {
    const [mode, setMode] = React.useState('signup');

    const sliderHandler = (selectedMode) => {
        console.log(`${selectedMode} button clicked`);
        setMode(selectedMode);
    };

    const closeHandler = () => {
        console.log('close button clicked');
        onClose();
    };

    return (
        // overlay background
        <div className="formOverlay fixed top-0 left-0 z-50 h-[100vh] w-[100vw] bg-black/75 flex justify-center items-center">
        <div className="bg-[var(--primaryColor)] relative rounded shadow-xl w-[25vw] min-h-[50vh] flex flex-col justify-center items-center text-center">
            {/* Form */}
            <div className="form flex flex-col justify-center items-center">
                {/* Slider for form */}
                <button onClick={closeHandler} className="absolute right-0 top-0 p-[0.5vw]">X</button>
                <div className="sliderContainer absolute top-0 flex flex-row justify-center gap-0 h-[7vh] w-[15vw] text-black">
                    <button onClick={() => sliderHandler('signup')}>Sign Up</button>
                    <button onClick={() => sliderHandler('signin')}>Sign In</button>
                    
                </div>

            {mode === 'signin' ? <Login /> : <Register />}
            </div>
        </div>
        </div>
    );
}