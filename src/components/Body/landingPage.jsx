import '../../index.css';
export default function landingPage()
{

    const handleSignInClick = () => {
        console.log('Sign In/Up button clicked');
    };
    return (

        // Overall container for the body
        <div className="flex flex-col justify-center items-center align-center mt-[20vh] gap-[10vh]">
            {/* Intro Container */}
            <div className="flex flex-row h-full gap-[30vw]">
                {/* Left Container */}
                <div className="flex flex-col">
                    <p className="text-[5rem]">Welcome,</p>
                    <p className="text-[3rem]">To Calmly.</p>
                    <p className="text-[2rem]">Your Compassionate AI Therapist, Always Here to Listen.</p>
                    <button onClick={handleSignInClick} className="signInUpButton flex justify-center align-center cursor-pointer border-[1px]-solid overflow-hidden relative m-0 p-[17px_35px] outline-none no-underline uppercase ">Get Started</button>
                </div>

                {/* Right Container */}
                <div>
                    <img src="" alt="Therapist Placeholder" />
                </div>
            </div>
        
            {/* Info Container */}
            <div className="flex flex-row ">
                
                <div className="grid grid-cols-4 gap-[10vw]">
                    {/* List Goals and Background */}

                    <div className="flex flex-col align-center items-center w-[15vw] h-[30vh]  border-[1px] border-solid">
                        <p>What is this Calmly</p>
                        <p>Feeling stressed, overwhelmed, or just need someone to talk to? Calmly is here to provide a safe, judgment-free space for you to express yourself and find peace of mind</p>
                    </div>

                    <div className="flex flex-col align-center items-center w-[15vw] h-[30vh]  border-[1px] border-solid">
                        <p>Why was this created</p>
                        <p>Calmly is a passion project of mine that culminates from my interest in helping others with their mental health issues. As a person who has felt the gut wrenching feeling of lonliness and helplessness, this project aims to give people supplemental assistance by providing someone to talk to. Being able to confide in someone and freely express one's thoughts is paramount to maintaining a calm state of mind. I hope Calmly can assist as many people reach their version of a state of peace.</p>
                    </div>

                    <div className="flex flex-col align-center items-center w-[15vw] h-[30vh]  border-[1px] border-solid">
                        <p>Who Created Calmly</p>
                        <p>Hello, my name is David and I am the creator of Calmly. I am a Computer Science Major at UCF where I have aspirations to becoming a Full Stack Engineer and Project Manager.</p>
                    </div>

                    <div className="flex flex-col align-center items-center w-[15vw] h-[30vh]  border-[1px] border-solid">
                        <p>How do you use Calmly</p>
                        <p>Calmly was developed for ease of use. To start, all you need to do is sign up and start a chat with our AI Therapist. Calmly has a built in speech recognition and text-to-speech to simulate talking to an actual therapist. Though you can also opt to just chat to it like you would with any other chat bot like ChatGPT.  </p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}