import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

export default function Login(){
    return(
        <div className="login-page">
            <div className="content">
                <div className="switch-tab">
                    <p className="login-tab">Login</p>
                    <Link to="/sign-up"><p >Sign Up</p></Link>
                </div>
                <div className="sign-up-form">
                    <button className="google-btn">
                            Continue with google<FcGoogle size={15}/>
                    </button>

                    <p>Or</p>

                    <form>
                        <div className="details">
                            <label htmlFor="">Email<span>*</span></label>
                            <input type="text" name="email" placeholder="Enter your email here"/>
                        </div>
                        
                        <div className="details">
                            <label htmlFor="">Password<span>*</span></label>
                            <input type="text" name="email" placeholder="Enter your password here"/>
                        </div>
                        
                        <p className="forget">Forget password?</p>

                        <button>Login</button>
                    </form>

                    <p className="redirect">
                        Don't have an account? <Link to="/sign-up">Signup here</Link>
                    </p>
                </div>

            </div>
        </div>
    )
}