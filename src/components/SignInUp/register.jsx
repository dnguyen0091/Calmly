export default function Register() {

    return(
        // form input fields for registration

        <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <button>Sign Up</button>

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