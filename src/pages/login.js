import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import "../css/login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });
  const [showPassword, setShowPassword] = useState(false);
  const toastRef = useRef(null);
  const navigate = useNavigate(); // Hook for redirecting

  const emailPattern =
    /^[a-zA-Z0-9]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.(com|in|org|jnu|ac)$/i;
  const existingEmails = [
    "test@domain.com",
    "example@domain.in",
    "admin@domain.org",
  ];

  useEffect(() => {
    const handlePageShow = (event) => {
      if (
        event.persisted ||
        (window.performance && window.performance.navigation.type === 2)
      ) {
        if (!sessionStorage.getItem("reloaded")) {
          sessionStorage.setItem("reloaded", "true");
          window.location.reload();
        }
      }
    };

    const handleBeforeUnload = () => {
      sessionStorage.removeItem("reloaded");
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const showToast = (message, type = "error") => {
    setToast({ message, type });
    toastRef.current.classList.add("show");
    setTimeout(() => {
      toastRef.current.classList.remove("show");
    }, 3000);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value.trim().toLowerCase();
    if (!inputEmail) return setEmail("");
    if (!emailPattern.test(inputEmail)) {
      showToast("Invalid email format.");
      return setEmail("");
    }
    if (existingEmails.includes(inputEmail)) {
      showToast("Email already exists.");
      return setEmail("");
    }
    setEmail(inputEmail);
  };

  const handlePasswordChange = (e) => {
    const cleaned = e.target.value.replace(/^\s+/, "");
    setPassword(cleaned);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
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

        <div ref={toastRef} id="toast" className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      </div>
    </div>
  );
};

export default Login;
