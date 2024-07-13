import React from 'react';
import './Vent.css';
import buttonLeft from './buttonLeft.png';
import buttonRight from './buttonRight.png';
import buttonAdd from './buttonAdd.png';
import { useNavigate } from 'react-router-dom';

const Vent = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
      navigate('/'); 
  };
    return (

        <div id = "con">
            <p className="title">ease elves</p>
            
            <div className ="logout">
              <button type = "submit" onClick={handleLogout}>logout</button>
            </div>

            <img 
                src={buttonLeft} 
                alt="Button" 
                className="buttonLeft" 
            />
            <img 
                src={buttonRight} 
                alt="Button" 
                className="buttonRight" 
            />
            <img 
                src={buttonAdd} 
                alt="Button" 
                className="buttonAdd" 
            />

            <div class= "input-box">
                <input type="text" placeholder='I`m worried about... '/>
            </div>

            <div className = "link">
                <p><a href="#">This is resolved.</a></p>
            </div>
            <div className = "link2">
                <p><a href="#">edit</a></p>
            </div>
        </div>
    );
};

export default Vent;