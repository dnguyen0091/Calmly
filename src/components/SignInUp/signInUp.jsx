import Login from './login.jsx';
import Register from './register.jsx';

export default function SignInUp() {

    const sliderHandler = (mode) => {
        console.log(`${mode} button clicked`);
        // Update state logic to render the appropriate form based on mode

        if (mode==='signin'){
            <Login />
        }
        else{
            <Register />
        }
    };
    return(

        
        // overlay  background
        <div className="formOverlay absolute top-0 left-0 z-50 h-[100vh] w-[100vw] bg-black/75 flex justify-center items-center">
            
            <div className="bg-white p-6 rounded shadow-xl">
                {/* Form */}
                <div className="form flex flex-col justify-center items-center align-center gap-[10vh]">
                    {/* Slider for form */}
                    <div className="sliderContainer gap-0 h-[7vh] w-[15vw]">
                        <button onClick={() => sliderHandler('signup')}>Sign Up</button>
                        <button onClick={() => sliderHandler('signin')}>Sign In</button>
                    </div>

                    
                </div>
            </div>
        </div>
        
    )
}


