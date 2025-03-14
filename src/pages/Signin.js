import React from "react";
import "./../styles/signin.css"; // Import the CSS file
import googleIcon from "./../components/googleicon.png"; // Import Google icon
import githubIcon from "./../components/github.png"; // Import GitHub icon
import Footer from './Footer';
import { Link } from 'react-router-dom'; 

const Signin = () => {
  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <h2>Sign In</h2>
        <p className="greetings">Welcome back to EduConnect Ghana</p>

        <form>
          <label className="email-address">Email Address</label>
          <input type="email" placeholder="your.email@university.edu.gh" />

          <label className="password-address">Password</label>
          <input type="password" placeholder="********" />

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="remembertext">Remember me</label>
            </div>
            <a href="#forgot-password" className="forgot-password">Forgot password?</a>
          </div>

          <button className="btn-primary">Sign In</button>

          <div className="or-divider">
            <hr className="divider" />
            <span className="or-continue">Or continue with</span>
            <hr className="divider" />
          </div>

          <div className="social-buttons">
            <button className="btn-google">
              <img src={googleIcon} alt="Google Icon" className="social-icon" />
              Google
            </button>
            <button className="btn-github">
              <img src={githubIcon} alt="GitHub Icon" className="social-icon" />
              GitHub
            </button>
          </div>

          <p className="signup-text">
            Don't have an account? 
            {/* <a href="/Signup">Sign up</a> */}
            <Link to="/Signup">Sign up</Link>
          </p>
        </form>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Signin;