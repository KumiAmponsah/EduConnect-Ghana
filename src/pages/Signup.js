import React, { useState } from 'react';
import './../styles/signup.css';
import { Link } from 'react-router-dom'; 
import Footer from './Footer';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [level, setLevel] = useState('');
  const [programme, setProgramme] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { firstName, lastName, email, university, level, programme, password, confirmPassword, agreeTerms });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <p>Join Ghana's premier platform for university collaboration</p>
        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <div>
              <p className="firstname-text">First Name</p>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <p className="lastname-text">Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <p className="email-text">Email Address</p>
            <input
              type="email"
              placeholder="your-email@university.edu.gh"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p className="institution-text">University/Institution</p>
            <select value={university} onChange={(e) => setUniversity(e.target.value)}>
              <option>Select your institution</option>
              <option value="KNUST">KNUST</option>
              <option value="LEGON">LEGON</option>
              <option value="UMAT">UMAT</option>
              <option value="UCC">UCC</option>
            </select>
          </div>

          <div>
            <p className="level-text">Level/Year</p>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option>Select your year</option>
              <option value="Year 1">Year 1</option>
              <option value="Year 2">Year 2</option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
              <option value="Year 5">Year 5</option>
              <option value="Year 6">Year 6</option>
            </select>
          </div>

          <div>
            <p className="programme-text">Programme</p>
            <select value={programme} onChange={(e) => setProgramme(e.target.value)}>
              <option>Select your programme</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Biomedical Engineering">Biomedical Engineering</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Medicine">Medicine</option>
              <option value="Optometry">Optometry</option>
            </select>
          </div>

          <div>
            <p className="password-text">Password</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <p className="confirm-password-text">Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="terms">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <span className="checkbox-text">
              I agree to the <a href="#Terms of Services" className="link">Terms of Service</a> and{' '}
              <a href="#link" className="link">Privacy Policy</a>
            </span>
          </div>

          <button type="submit" className="create-account">Create Account</button>
        </form>

        <div className="or-signup">
          <p>Or sign up with</p>
          <div className="social-buttons">
            <button className="google">Google</button>
            <button className="github">GitHub</button>
          </div>
        </div>

        <p>
          Already have an account? 
          {/* <a href="/Signin" className="signin-link">Sign In</a> */}
          <Link to="/Signin" className="signin-link">Sign In</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;