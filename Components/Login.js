import React from "react";

const Login = () => {
  return (
    <div className="Form">
      <h2>Login Page</h2>
      <form>
        <label>Enter Your Email</label><br/>
        <input type="email" placeholder="Email" required /><br/>
        <label>Your Password</label><br/>
       <input type="password" placeholder="Password" required /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
