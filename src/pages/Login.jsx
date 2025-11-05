import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="form-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>

        <p className="form-footer">
          Don't have an account?{" "}
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </p>
      </form>
    </section>
  );
}

export default Login;
