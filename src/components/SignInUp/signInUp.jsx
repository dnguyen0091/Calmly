import React from 'react';
import '../../index.css';
import Login from './login.jsx';
import Register from './register.jsx';

export default function SignInUp({ onClose }) {
    const [mode, setMode] = React.useState('signup');

    const sliderHandler = (selectedMode) => {
        console.log(`${selectedMode} button clicked`);
        setMode(selectedMode);

        if (selectedMode === 'signin') {
            document.querySelector('.formSlider').style.left = '50%';
        }
        else {
            document.querySelector('.formSlider').style.left = '0%';
        }
    };

    const closeHandler = () => {
        console.log('close button clicked');
        onClose();
    };

    return (
        // overlay background
        <div className="formOverlay fixed top-0 left-0 z-50 h-[100vh] w-[100vw] bg-black/75 flex justify-center items-center">
            <div className="bg-[var(--secondaryColor)] text-[var(--textColor)] relative rounded-3xl shadow-xl w-[25vw] min-h-[50vh] flex flex-col justify-center items-center text-center p-[1vh]">
                {/* Form */}
                <div className="form flex flex-col justify-center items-center">
                    {/* Slider for form */}
                    <button onClick={closeHandler} className="absolute right-0 top-0 p-[0.5vw]">X</button>
                    <div className="sliderContainer absolute top-0 flex flex-row justify-center gap-0 w-[10.5vw] mt-[3vh] border-[var(--primaryColor)] border-[0.1rem] rounded-4xl">
                        <div className="formSlider absolute top-0 left-0 w-[50%] h-[100%] bg-[var(--backgroundColor)] rounded-4xl transition-[1s]"></div>
                        <button onClick={() => sliderHandler('signup')} className="w-[50%] p-[10px] cursor-pointer bg-transparent border-0 outline-none relative text-[var(--textColor)]">Sign Up</button>
                        <button onClick={() => sliderHandler('signin')} className="w-[50%] p-[10px] cursor-pointer bg-transparent border-0 outline-none relative text-[var(--textColor)]">Sign In</button>
                        
                    </div>

                    {mode === 'signin' ? <Login /> : <Register />}
                </div>
            </div>
        </div>
    );
}