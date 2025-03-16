import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to the Arts Club</h2>
        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
