export function Login()
{
    return(

        // input fields for login
        <div>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign In</button>

            {/* Add divider */}
            <div>
                <p>or</p>
                <div>
                    <a href=""><img src="" alt="google Icon" /></a>
                    <a href=""><img src="" alt="apple Icon" /></a>
                </div>
                
            </div>
        </div>

    )
}