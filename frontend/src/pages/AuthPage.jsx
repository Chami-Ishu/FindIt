import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import "./AuthPage.css";

function AuthPage({ type }) {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const isLogin = type === "login";
  const isRegister = type === "register";
  const isForgot = type === "forgot";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isForgot) {
      alert("Password reset feature will be available soon!");
      return;
    }

    alert(
      isLogin
        ? "Login functionality will be connected to the backend soon!"
        : "Registration functionality will be connected to the backend soon!"
    );
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <Link to="/" className="auth-logo">
          <span>Find</span>It.
        </Link>

        <div className="auth-content">
          <div className="auth-icon">🔎</div>

          <h1>Every lost item has a way home.</h1>

          <p>
            Join FindIt and help reunite lost belongings with their
            rightful owners.
          </p>
        </div>

        <div className="auth-footer">
          FindIt © 2026 | Bringing belongings back home.
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-wrapper">

          <Link to="/" className="back-home">
            <ArrowLeft size={17} /> Back to Home
          </Link>

          <h2>
            {isLogin
              ? "Welcome Back!"
              : isRegister
              ? "Create an Account"
              : "Forgot Password?"}
          </h2>

          <p className="auth-subtitle">
            {isLogin
              ? "Sign in to continue to your FindIt account."
              : isRegister
              ? "Join our community and help find lost belongings."
              : "Enter your email address to reset your password."}
          </p>

          <form onSubmit={handleSubmit}>

            {isRegister && (
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <User size={19} />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={19} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {!isForgot && (
              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <Lock size={19} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {isRegister && (
              <div className="input-group">
                <label>Confirm Password</label>
                <div className="input-wrapper">
                  <Lock size={19} />
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="forgot-link">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            )}

            <button type="submit" className="auth-submit">
              {isLogin
                ? "Sign In"
                : isRegister
                ? "Create Account"
                : "Reset Password"}
            </button>
          </form>

          {!isForgot && (
            <div className="auth-switch">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <Link to="/register">Sign Up</Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link to="/login">Sign In</Link>
                </>
              )}
            </div>
          )}

          {isForgot && (
            <div className="auth-switch">
              <Link to="/login">Back to Login</Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default AuthPage;