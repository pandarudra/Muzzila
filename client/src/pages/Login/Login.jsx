import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { wait } from "../../utils/wait";
import { useAuth } from "../../hooks/useAuth";
import { axiosInstance } from "../../utils/refresh";
import { url } from "../../utils/config";
import { BackgroundLines } from "../../components/BackgroundLines";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { auth, loading } = useAuth();

  useEffect(() => {
    if (!loading && auth) {
      navigate("/dashboard");
    }
  }, [auth, loading, navigate]);

  // register user
  const handleSignup = async (e) => {
    e.preventDefault();
    if (ConfirmPassword !== Password) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await axiosInstance.post(
        `${url}/api/signup`,
        {
          email: Email,
          number: PhoneNumber,
          password: Password,
        },
        {
          withCredentials: true,
        }
      );
      const accessToken = res.data.accessToken;
      localStorage.setItem("token", accessToken);
      toast.success(res.data.message);
      await wait(2000);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // login user
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        `${url}/api/login`,
        {
          email: Email,
          password: Password,
        },
        {
          withCredentials: true,
        }
      );
      const accessToken = res.data.accessToken;
      localStorage.setItem("token", accessToken);
      toast.success(res.data.message);
      await wait(2000);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div className="container">
        <img src="/logo.png" alt="logo" className="" />
        <Toaster />
        <div className="form-container">
          <div className="form-toggle">
            <button
              type="submit"
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
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
            <form onSubmit={onLogin} className="form-login">
              <h1>Login</h1>
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
              <div className="remember-forget">
                <Link to="#">Forgot Password</Link>
              </div>
              <button type="submit">LOGIN</button>
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
    </BackgroundLines>
  );
};
