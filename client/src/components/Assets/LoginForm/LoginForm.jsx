import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div>
            <div className='container'>
                <div className='form-container'>
                    <div className='form-toggle'>
                        <button type="submit" className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>LOGIN</button>
                        <button type="submit" className={!isLogin ? 'active': ""} onClick={() => setIsLogin(false)}>Register</button>
                    </div>
                    {isLogin ? (
                        <div className='form-login'>
                            <h1>Login</h1>
                            <div className='input-wrapper'>
                                <input type="text" placeholder='Email' className='input-field' required />
                                <FaUser className='icon'/>
                            </div>
                            <div className='input-wrapper'>
                                <input type="password" placeholder='Password' className='input-field' required />
                                <FaLock className='icon'/>
                            </div>
                            <div className='remember-forget'>
                                <label><input type="checkbox" />REMEMBER ME </label>
                                <a href="#">Forgot Password</a>
                            </div>
                            <button>LOGIN</button>
                            <div className='register-link'>
                                <p>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Register</a></p>
                            </div>
                        </div>
                    ) : (
                        <div className='form-register'>
                            <h1>SignUp</h1>
                            <div className='input-wrapper'>
                                <input type="text" placeholder='Email' className='input-field' required />
                                <FaUser className='icon'/>
                            </div>
                            <div className='input-wrapper'>
                                <input type="password" placeholder='Password' className='input-field' required />
                                <FaLock className='icon'/>
                            </div>
                            <div className='input-wrapper'>
                                <input type="password" placeholder='Confirm Password' className='input-field' required />
                                <FaLock className='icon'/>
                            </div>
                            <div className='input-wrapper'>
                                <input type="number" placeholder='Enter Phone Number' className='input-field' required />
                                <FaLock className='icon'/>
                            </div>
                            
                            <button>REGISTER</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginForm;

