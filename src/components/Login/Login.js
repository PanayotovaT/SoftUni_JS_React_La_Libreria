import './Login.css';

const Login = () => {

    return (
        <section className="libreria-login">
            <form className="libreria-login-form" method="POST">
                <fieldset>
                    <legend>Sign In Form</legend>
                    <div className="login-form-div">
                        <label htmlFor="username" className="login-form-label">Username</label>
                        <input type="text" className="login-form-input" id="username" name="username" placeholder="username"/>
                    </div>
                    <div className="login-form-div">
                        <label htmlFor="password" className="login-form-label">Password</label>
                        <input type="password" className="login-form-input" id="password" name="password" />
                    </div>
                    <div className="login-form-div">
                        <input type="submit" className="login-form-input" value="Sign In"/>
                    </div>
                </fieldset>
            </form>
        </section> 
    )
}

export default Login;