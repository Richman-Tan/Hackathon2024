import React, { useState } from 'react';
import './Components/Customise/style.css';
import bodyImg from './assets/IMG_0773.PNG';

const Customise = () => {

   

    return (

        <div className='wrapper'>
            <h1 className="text-4xl" style={{ position: 'fixed', top: 0, left: 50 }}>
                ease elves
            </h1>
            <div className="image-container">
            <img src = {bodyImg} alt = "body"/>
            </div>

            <div className="input-box" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                <input type="text" placeholder='name' required/>
            </div>
    



{/* 
 const [dressupState, setDressupState] = useState({
        hair: {current: 0, total: 2},
        face: {current: 0, total: 2},
        outfit: {current: 0, total: 2},
      });
            <div id="body"></div>
            <div id="hair" className="hair"></div>
            <div id="face" className="face"></div>
            <div id="outfit" className="outfit"></div> */}

        </div>
    );
};

export default Customise;