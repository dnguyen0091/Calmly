
// import '../../assets/logo.svg';
import '../../index.css';
import './header.css';

export default function Header() {
    const handleSignInClick = () => {
        console.log('Sign In/Up button clicked');
    };

    return (
        <div className="header bg-[var(--backgroundColor)] h-[10vh] text-[var(--textColor)] flex justify-center items-center px-4">
            <img src="" alt="Logo Placeholder" />
            <div className="absolute right-0">
                <button onClick={handleSignInClick} className="signInUpButton flex justify-center align-center cursor-pointer border-[1px]-solid overflow-hidden relative m-0 p-[17px_35px] outline-none no-underline uppercase ">Sign Up</button>

            </div>
            
        </div>
    );
}