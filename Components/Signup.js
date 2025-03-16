import React from "react";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
