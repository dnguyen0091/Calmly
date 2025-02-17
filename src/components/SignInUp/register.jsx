export default function Register() {

    return(
        // form input fields for registration

        <div className="form flex flex-col justify-center items-center gap-[1.5rem] mt-[4vh]">
            <div className="flex flex-row gap-[1rem]">
                <div>
                    <div className="flex flex-row justify-center">
                        <p className="text-[1.25rem]">First Name</p>
                        <p className="text-[red]">*</p>
                    </div>
                    
                    <input type="text" placeholder="First Name" className="w-[9vw] h-[4vh] bg-white border-[var(--backgroundColor)] placeholder:text-[var(--secondaryColor)] text-[var(--secondaryColor)] border-[0.2rem] p-[0.5em] rounded-xl"/>
                </div>
                
                <div>
                    <div className="flex flex-row justify-center">
                        <p className="text-[1.25rem]">Email</p>
                        <p className="text-[red]">*</p>
                    </div>
                    
                    <input type="text" placeholder="Email" className="w-[9vw] h-[4vh] bg-white border-[var(--backgroundColor)] placeholder:text-[var(--secondaryColor)] text-[var(--secondaryColor)] border-[0.2rem] p-[0.5em] rounded-xl"/>
                </div>
                
            </div>
            
            <div>
                <div className="flex flex-row justify-center">
                    <p className="text-[1.25rem]">Password</p>
                    <p className="text-[red]">*</p>
                </div>
                
                <input type="password" placeholder="Password" className="w-[15vw] h-[4vh] bg-white border-[var(--backgroundColor)] placeholder:text-[var(--secondaryColor)] text-[var(--secondaryColor)] border-[0.2rem] p-[0.5em] rounded-xl"/>
            </div>

            <div>
                <div className="flex flex-row justify-center">
                    <p className="text-[1.25rem]">Confirm Password</p>
                    <p className="text-[red]">*</p>
                </div>
                
                <input type="password" placeholder="Confirm Password" className="w-[15vw] h-[4vh] bg-white border-[var(--backgroundColor)] placeholder:text-[var(--secondaryColor)] text-[var(--secondaryColor)] border-[0.2rem] p-[0.5em] rounded-xl"/>
            </div>
            
            <button className="w-[15vw] h-[4vh] bg-transparent text-[var(--textColor)] border-[var(--backgroundColor)] border-[0.2rem] p-[0.5em] rounded-xl">Sign Up</button>

            {/* Add divider */}
            <div className="flex items-center flex-col">
                <div className="flex items-center w-[20vw] my-4">
                    <div className="flex-grow border-t border-[var(--textColor)]-300"></div>
                    <span className="mx-4 text-[var(--textColor)]-500">OR</span>
                    <div className="flex-grow border-t border-[var(--textColor)]-300"></div>
                </div>
                <div className="flex flex-row gap-[2rem]">
                    <a href=""><img src="" alt="google Icon" /></a>
                    <a href=""><img src="" alt="apple Icon" /></a>
                </div>
            </div>
        </div>
    )

}