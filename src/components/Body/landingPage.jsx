import { useState } from 'react';
import '../../index.css';
import SignInUp from '../SignInUp/signInUp.jsx';

export default function LandingPage()
{
    const [showSignInUp, setShowSignInUp] = useState(false);
    const handleSignInClick = () => {
        console.log('Sign In/Up button clicked');
        setShowSignInUp(true);
    };
    return (

        
        // Overall container for the body
        <div className="flex flex-col justify-center items-center align-center mt-[15vh] gap-[10vh]">
            {/* Intro Container */}
            <div className="flex flex-row h-full gap-[30vw]">
                {/* Left Container */}
                <div className="flex flex-col text-[var(--backgroundColor)] gap-[2.5vh]">
                    <p className="text-[5rem]">Welcome,</p>
                    <p className="text-[3rem]">To Calmly.</p>
                    <p className="text-[2rem]">Your Compassionate AI Therapist, Always Here to Listen.</p>
                    <button onClick={handleSignInClick} className="signInUpButton flex justify-center align-center cursor-pointer w-[15vw] border-[1px] border-solid border-[var(--backgroundColor)] bg-white shadow-lg overflow-hidden relative m-0 p-[17px_35px] outline-none no-underline uppercase ">Get Started</button>
                </div>

                {/* Right Container */}
                <div>
                    <img src="" alt="Therapist Placeholder" />
                </div>
            </div>
        
            {/* Info Container */}
            <div className="flex flex-row">
                
                <div className="grid grid-cols-4 gap-[10vw] text-[var(--secondaryColor)]">
                    {/* List Goals and Background */}

                    <div className="flex flex-col align-center items-center w-[15vw] h-[30vh]  border-[1px] border-solid rounded-md bg-white">
                        <p className="text-[2rem] font-bold p-[0.5em]">What is this Calmly</p>
                        <p className="text-[1.25rem] p-[0.5em]">Feeling stressed, overwhelmed, or just need someone to talk to? Calmly is here to provide a safe, judgment-free space for you to express yourself and find peace of mind</p>
                    </div>

                    <div className="flex flex-col align-center items-center w-[15vw] h-[30vh]  border-[1px] border-solid rounded-md bg-white">
                        <p className="text-[2rem] font-bold p-[0.5em]">Why was this created?</p>
                        <p className="text-[1.25rem] p-[0.5em]">Calmly is a passion project born from my desire to help others with their mental health. As someone who has experienced loneliness and helplessness, I created Calmly to provide supplemental support—a safe space to confide and express yourself freely. My hope is that Calmly helps as many people as possible find their own version of peace.</p>
                    </div>

                    <div className="flex flex-col align-center items-center w-[15vw] h-[30vh]  border-[1px] border-solid rounded-md bg-white">
                        <p className="text-[2rem] font-bold p-[0.5em]">Who Created Calmly</p>
                        <p className="text-[1.25rem] p-[0.5em]">Hello, my name is David and I am the creator of Calmly. I am a Computer Science Major at UCF where I have aspirations to becoming a Full Stack Engineer and Project Manager.</p>
                    </div>

                    <div className="flex flex-col align-center items-center w-[15vw] h-[30vh]  border-[1px] border-solid rounded-md bg-white">
                        <p className="text-[2rem] font-bold p-[0.5em]">How do you use Calmly</p>
                        <p className="text-[1.25rem] p-[0.5em]">Calmly is designed for ease of use. Simply sign up and start chatting with our AI Therapist. With built-in speech recognition and text-to-speech, it feels like talking to a real therapist—or you can chat text-only, just like any other chatbot.</p>
                    </div>
                </div>
                

            </div>
            {showSignInUp && <SignInUp />}
        </div>
        


    )
}