export default function Register() {

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formValidation())
        {
            console.log('Form Submitted');

            //Connect API Endpoint here

            resetForm();
        }
        else
        {
            console.log('Form Error');

            // Add error message here
        }
    };

    return(
        // form input fields for registration

        <div className="form flex flex-col justify-center items-center gap-[1.5rem] mt-[4vh]">
            <div className="flex flex-row gap-[1rem]">
                <div>
                    <div className="flex flex-row justify-center">
                        <p className="text-[1.25rem]">First Name</p>
                        <p className="text-[red]">*</p>
                    </div>
                    
                    <input type="text" placeholder="First Name"

                    className="w-[9vw] h-[4vh] bg-white border-[var(--backgroundColor)] placeholder:text-[var(--secondaryColor)] text-[var(--secondaryColor)] border-[0.2rem] p-[0.5em] rounded-xl"/>
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
            
            <button onClick={handleSubmit} type="submit" className="w-[15vw] h-[4vh] bg-transparent text-[var(--textColor)] border-[var(--backgroundColor)] border-[0.2rem] p-[0.5em] rounded-xl">Sign Up</button>

            {/* Add divider */}
            <div className="flex items-center flex-col">
                <div className="flex items-center w-[20vw] my-4">
                    <div className="flex-grow border-t border-[var(--textColor)]-300"></div>
                    <span className="mx-4 text-[var(--textColor)]-500">OR</span>
                    <div className="flex-grow border-t border-[var(--textColor)]-300"></div>
                </div>
                <div className="flex flex-row gap-[2rem]">
                    <a href=""><img src="../../assets/google.png" alt="google Icon" /></a>
                    <a href=""><img src="../../assets/apple.png" alt="apple Icon" /></a>
                </div>
            </div>
        </div>
    )

}





function formValidation()
{
    // get all the input fields
    const firstName = document.querySelector('input[placeholder="First Name"]');
    const email = document.querySelector('input[placeholder="Email"]');
    const password = document.querySelector('input[placeholder="Password"]');
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]');


    let errorFlag = true;

    // check if all the fields are filled
    if(firstName.value === "")
    {
        firstName.style.border = "0.2rem solid red";
        errorFlag = false;
    }

    if(email.value === "")
    {
        email.style.border = "0.2rem solid red";
        errorFlag = false;
    }

    if(password.value === "")
    {
        password.style.border = "0.2rem solid red";
        errorFlag = false;
    }

    if(confirmPassword.value === "")
    {
        confirmPassword.style.border = "0.2rem solid red";
        errorFlag = false;
    }

    if (errorFlag === false)
    {
        confirmPassword.style.border = "0.2rem solid red";
        return errorFlag;
    }
    // check if the email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(email.value))
    {
        email.style.border = "0.2rem solid red";
        errorFlag = false;
    }

    // check if the password is valid
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(!passwordPattern.test(password.value))
    {
        password.style.border = "0.2rem solid red";
        errorFlag = false;
    }

    // check if the password and confirm password are same
    if(password.value !== confirmPassword.value)
    {
        password.style.border = "0.2rem solid red";
        errorFlag = false;
    }

    return errorFlag;
}


function resetForm()
{
    const firstName = document.querySelector('input[placeholder="First Name"]');
    const email = document.querySelector('input[placeholder="Email"]');
    const password = document.querySelector('input[placeholder="Password"]');
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]');

    firstName.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";

    firstName.style.border = "0.2rem solid var(--backgroundColor)";
    email.style.border = "0.2rem solid var(--backgroundColor)";
    password.style.border = "0.2rem solid var(--backgroundColor)";
    confirmPassword.style.border = "0.2rem solid var(--backgroundColor)";
}