import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";


export default function SignUp(){
    return(
        <div className="sign-up-page" style={{backgroundImage: `url("static/images/background.png")`}}>
            <div className="content">
                <div className="switch-tab">
                    <Link to="/login"><p>Login</p></Link>
                    <p className="sign-up-tab">Sign Up</p>
                </div>
                <div className="sign-up-form">
                    <button className="google-btn">
                            Continue with google<FcGoogle size={15}/>
                    </button>

                    <p>Or Create Your Account</p>

                    <form>
                        <div className="details">
                            <label htmlFor="">FullName<span>*</span></label>
                            <input type="text" name="fullname" id="fullname" placeholder="Enter your name here" />
                        </div>

                        <div className="details">
                            <label htmlFor="">Email<span>*</span></label>
                            <input type="text" name="email" placeholder="Enter your email here"/>
                        </div>

                        <div className="details">
                            <label htmlFor="">Password<span>*</span></label>
                            <input type="text" name="email" placeholder="Enter your password here"/>
                        </div>
                        

                        <div className="terms-and-conditions">
                            <input type="checkbox" name="terms-and-condition" title="Agree to terms and conditions"/>
                            <label htmlFor="">By signing up, you agree to our Terms & Conditions and Privacy Policy.</label>
                        </div>

                        <button>Sign Up</button>
                    </form>

                    <p className="redirect">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>

        </div>
    )
}