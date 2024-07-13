import React, { useState } from 'react';
import './Components/Customise/style.css';

const Customise = () => {

    const [dressupState, setDressupState] = useState({
        hair: {current: 0, total: 2},
        face: {current: 0, total: 2},
        outfit: {current: 0, total: 2},
      });

    return (

        <div className='wrapper'>
        
            <h1 className="text-4xl ">Ease Elves</h1>

            <div className="input-box">
                <input type="text" placeholder='name' required/>
            </div>

            



{/* 
            <div id="body"></div>
            <div id="hair" className="hair"></div>
            <div id="face" className="face"></div>
            <div id="outfit" className="outfit"></div> */}

        </div>
    );
};

export default Customise;