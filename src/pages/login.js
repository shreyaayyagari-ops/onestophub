import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting
import "../css/login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // No validation, just set value
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Just set password directly
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
    navigate("/dashboard"); // Redirect directly
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
            />
            <i
              className={`fa-solid eye-icon ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              }`}
              onClick={togglePasswordVisibility}
              title={showPassword ? "Hide Password" : "Show Password"}
            ></i>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="forgot-password">
          <a href="/auth/forgotpassword">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
