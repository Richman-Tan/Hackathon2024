import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import FaceImage from './Face.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
      navigate('/customise'); 
  };

  return (
    <div className="login-container">
        <h1 className="centered-title">ease elves</h1>
        <h3 className="centered-subtitle">ease your mind with a trustworthy elf</h3>
        <div className="image-container-2">
            <img style={{width: "250px", position: "relative", top: "20px"}} src = {FaceImage} alt = "Face"/>
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
                <div className = "button">
                    <button type = "submit" onClick={handleLogin}>Login</button>
                </div>
                <div className = "register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginForm;