export default function Login()
{


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

        // input fields for login
        <div className="flex flex-col justify-center items-center gap-[1.5rem]">
            <div>
                <p className="text-[1.25rem]">Email</p>
                <input type="text" placeholder="Email" className="w-[15vw] h-[4vh] bg-white border-[var(--backgroundColor)] placeholder:text-[var(--secondaryColor)] text-[var(--secondaryColor)] border-[0.2rem] p-[0.5em] rounded-xl"/>
            </div>

            <div>
                <p className="text-[1.25rem]">Password</p>
                <input type="password" placeholder="Password" className="w-[15vw] h-[4vh] bg-white border-[var(--backgroundColor)] placeholder:text-[var(--secondaryColor)] text-[var(--secondaryColor)] border-[0.2rem] p-[0.5em] rounded-xl"/>
            </div>
            
            
            <button type="submit" onClick={handleSubmit} className="w-[15vw] h-[4vh] bg-transparent text-[var(--textColor)] border-[var(--backgroundColor)] border-[0.2rem] p-[0.5em] rounded-xl">Sign In</button>

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
    let email = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if(email === "" || password === "")
    {
        return false;
    }
    else
    {
        return true;
    }
}


function resetForm()
{
    document.querySelector('input[type="text"]').value = "";
    document.querySelector('input[type="password"]').value = "";
}