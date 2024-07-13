import React, { useState } from 'react';
import './Components/Customise/style.css';
import bodyImg from './assets/IMG_0773.PNG';

const Customise = () => {


    return (

        <div className='wrapper1'>
        <h11 style={{ position: 'fixed', top: 0, left: 50 }}>
                ease elves
            </h11>

        <div className="image-container">
            <img src={bodyImg} alt="body" />
        </div>

        <div className="input-box1" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
            <input type="text" placeholder='name' required />
        </div>
    

        </div>
        
    );
};

export default Customise;