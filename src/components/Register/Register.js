import './Register.css';

const Register = () => {

    return(
        <section className="register-section">
            <form className="register-form">
                <fieldset className="register-fieldset">
                    <legend className="register-legend">Register Form</legend>
                    <div className="register-form-div">
                        <label htmlFor="first-name" className="register-form-label">First Name</label>
                        <input type="text" className="register-form-input" id="first-name" name="first-name" placeholder="Alexander..."/>
                    </div>
                    <div className="register-form-div">
                        <label htmlFor="last-name" className="register-form-label">Last Name</label>
                        <input type="text" className="register-form-input" id="last-name" name="last-name" placeholder="Georgiev..."/>
                    </div>
                    <div className="register-form-div">
                        <label htmlFor="username" className="register-form-label">Username</label>
                        <input type="text" className="register-form-input" id="username" name="username" placeholder="username"/>
                    </div>
                    <div className="register-form-div">
                        <span className="register-form-span">Gender</span>
                        <div className="register-form-div-gender">

                        <label htmlFor="male" className="register-form-gender-label">Male</label>
                        <input type="radio" className="register-form-gender-input" id="male" name="gender"/>

                        <label htmlFor="female" className="register-form-gender-label">Female</label>
                        <input type="radio" className="register-form-gender-input" id="female" name="gender"/>
                        </div>
                    </div>
                    <div className="login-form-div">
                        <label htmlFor="password" className="register-form-label">Password</label>
                        <input type="password" className="register-form-input" id="password" name="password" />
                    </div>
                    <div className="login-form-div">
                        <label htmlFor="repass" className="register-form-label">Repeat Password</label>
                        <input type="password" className="register-form-input" id="repass" name="repass" />
                    </div>
                    <div className="register-form-div">
                        <input type="submit" className="register-form-input register-btn" value="Register"/>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}

export default Register;