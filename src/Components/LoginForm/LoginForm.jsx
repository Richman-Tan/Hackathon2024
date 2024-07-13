import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import FaceImage from './Face.png';

const LoginForm = () => {
  return (
    <div className="login-container">
        <h1 className="centered-title">ease elves</h1>
        <h3 className="centered-subtitle">ease your mind with a trustworthy elf</h3>
        <div className="image-container">
            <img src = {FaceImage} alt = "Face"/>
        </div>
        <div className = 'wrapper'> 
            <form action="">
            <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className= "remember-forgot">
                    <label><input type="checkbox"/>Remember me</label> 
                    <a href="#"> Forgot Password?</a>
                </div>

                <button type = "submit">Login</button>
                <div className = "register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginForm;