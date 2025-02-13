import React, { useState, useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import { useNavigate } from 'react-router-dom';
import './Components/Customise/style.css';
import bodyImg from './assets/IMG_0773.PNG';
import face1 from './assets/faces/IMG_0775.PNG';
import face2 from './assets/faces/IMG_0778.PNG';
import hair1 from './assets/hairs/IMG_0774.PNG';
import hair2 from './assets/hairs/IMG_0776.PNG';
import outfit1 from './assets/outfits/IMG_0779.PNG';
import outfit2 from './assets/outfits/IMG_0780.PNG';
import colour1 from './assets/colours/colour1.png';
import colour2 from './assets/colours/colour2.png';
import faceButtonImg from './assets/buttons/face_button.png';
import hairButtonImg from './assets/buttons/hair_button.png';
import outfitButtonImg from './assets/buttons/outfit_button.png';
import colourButtonImg from './assets/buttons/colour_button.png';
import buttoncolourright from './assets/buttons/buttoncolourright.png';
import buttonfaceright from './assets/buttons/buttonfaceright.png';
import buttonhairright from './assets/buttons/buttonhairright.png';
import buttonoutfitright from './assets/buttons/buttonoutfitright.png';
import { FaRegShareSquare } from "react-icons/fa";
import temp from './assets/buttons/temp.png'
// import ElfAvatar from './Components/Elf/ElfAvatar';

import hair3 from './assets/hairs/IMG_0785.png'
import outfit3 from './assets/outfits/IMG_0786.png'

const Customise = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null); // State to track active button

    // Function to handle button click
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName); // Set the active button
    };

    const handleLogout = () => {
        navigate('/');
    };

    const handleNextPage = () => {
        navigate('/vent');
    }

    const [name, setName] = useState('');
    const hairs = [hair1, hair2, hair3];
    const faces = [face1, face2];
    const outfits = [outfit1, outfit2, outfit3];
    const colours = [bodyImg, colour1, colour2];
    const [faceIdx, setFaceIdx] = useState(0);
    const [hairIdx, setHairIdx] = useState(0);
    const [outfitIdx, setOutfitIdx] = useState(0);
    const [colourIdx, setColourIdx] = useState(0);
    const componentRef = useRef();

    const nextface = () => {
        setFaceIdx((faceIdx + 1) % faces.length);
    };

    const nexthair = () => {
        setHairIdx((hairIdx + 1) % hairs.length);
    };

    const nextoutfit = () => {
        setOutfitIdx((outfitIdx + 1) % outfits.length);
    };

    const nextcolour = () => {
        setColourIdx((colourIdx + 1) % colours.length);
    };

    const handleExport = () => {
        // Ensure the name input is not empty before exporting
        if (name.trim() === '') {
            alert('Please enter a name before exporting.');
            return;
        }

        // Export component as PNG with the entered name
        exportComponentAsPNG(componentRef, { fileName: `${name}_avatar.png` });
    };

    return (
        <div className='wrapper1'>
            <div className="logout" style={{ position: 'fixed', top: 40, right: 20, zIndex: 1000 }}>
                <button type="submit" onClick={handleLogout}>logout</button>
            </div>

            <div className='test' ref={componentRef}>
                <h11 className="text-6xl" style={{ position: 'fixed', top: 10, left: 50 }}>
                    ease elves
                </h11>

                <h2 className="text-3xl" style={{ position: 'fixed', top: 60, left: '50%', transform: 'translateX(-50%)', color: '#333'} }>
                    {name || 'New Elf'}
                </h2>

                <div className="flex-wrap">
                    <div className="image-container">
                        <img src={colours[colourIdx]} alt="colour" />
                        <img src={faces[faceIdx]} alt="face" />
                        <img src={hairs[hairIdx]} alt="hair" />
                        <img src={outfits[outfitIdx]} alt="outfit" />
                    </div>

                    <div className="buttonhair">
                        <button id="nexthair" onClick={nexthair}>
                            <img src={hairButtonImg} alt="next hair" />
                        </button>
                    </div>

                    <div className="buttonface">
                        <button id="nextface" onClick={nextface}>
                            <img src={faceButtonImg} alt="next face" />
                        </button>
                    </div>

                    <div className="buttonoutfit">
                        <button id="nextoutfit" onClick={nextoutfit}>
                            <img src={outfitButtonImg} alt="next outfit" />
                        </button>
                    </div>

                    <div className="buttoncolour">
                        <button id="nextcolour" onClick={nextcolour}>
                            <img src={colourButtonImg} alt="next colour" />
                        </button>
                    </div>
                </div>

                <div className="flex-wrap flex-wrap2 cont">
                    <div className="buttonhairright">
                        <button id="nexthair" onClick={nexthair}>
                            <img src={buttonhairright} alt="next hair" />
                        </button>
                    </div>

                    <div className="buttonfaceright">
                        <button id="nextface" onClick={nextface}>
                            <img src={buttonfaceright} alt="next face" />
                        </button>
                    </div>

                    <div className="buttonoutfitright">
                        <button id="nextoutfit" onClick={nextoutfit}>
                            <img src={buttonoutfitright} alt="next outfit" />
                        </button>
                    </div>

                    <div className="buttoncolourright">
                        <button id="nextcolour" onClick={nextcolour}>
                            <img src={buttoncolourright} alt="next colour" />
                        </button>
                    </div>
                </div>
            </div>


            <div className="button buttonsave" style={{ position: 'fixed', top: 650, right: 390, zIndex: 1000 }}>
                <button onClick={handleExport}>
                    <FaRegShareSquare /> Share
                </button>
            </div>
            
            <div className="nextPage" style={{ position: 'fixed', top: 663, right: 270, zIndex: 1000 }}>
                <button type="submit" onClick={handleNextPage}>Next</button>
            </div>


            <div className="button-container">
                <div className={`button-item ${activeButton === 'Happy' ? 'active' : ''}`} onClick={() => handleButtonClick('Happy')}>
                    <button className="btn">Happy</button>
                </div>
                <div className={`button-item ${activeButton === 'Sad' ? 'active' : ''}`} onClick={() => handleButtonClick('Sad')}>
                    <button className="btn">Sad</button>
                </div>
                <div className={`button-item ${activeButton === 'Sassy' ? 'active' : ''}`} onClick={() => handleButtonClick('Sassy')}>
                    <button className="btn">Sassy</button>
                </div>
                <div className={`button-item ${activeButton === 'Angry' ? 'active' : ''}`} onClick={() => handleButtonClick('Angry')}>
                    <button className="btn">Angry</button>
                </div>
            </div>

            <div className="input-box2" style={{ position: 'fixed', bottom: '15px', left: '50%', transform: 'translateX(-50%)' }}>
                <input
                    type="text"
                    placeholder='My Name'
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="button-item120">

            </div>
        </div>
    );
};

export default Customise;
