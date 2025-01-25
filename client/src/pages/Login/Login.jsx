import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (ConfirmPassword !== Password) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/api/signup", {
        email: Email,
        number: PhoneNumber,
        password: Password,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div className="container">
        <Toaster />
        <div className="form-container">
          <div className="form-toggle">
            <button
              type="submit"
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              LOGIN
            </button>
            <button
              type="submit"
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          {isLogin ? (
            <form className="form-login">
              <h1>Login</h1>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Email"
                  className="input-field"
                  required
                />
                <FaUser className="icon" />
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  required
                />
                <FaLock className="icon" />
              </div>
              <div className="remember-forget">
                <Link to="#">Forgot Password</Link>
              </div>
              <button>LOGIN</button>
              <div className="register-link">
                <p>
                  Don&apos;t have an account?
                  <Link to="#" onClick={() => setIsLogin(false)}>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="form-register">
              <h1>SignUp</h1>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Email"
                  className="input-field"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FaUser className="icon" />
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FaLock className="icon" />
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input-field"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <FaLock className="icon" />
              </div>
              <div className="input-wrapper">
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="input-field"
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <FaLock className="icon" />
              </div>

              <button type="submit">REGISTER</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
