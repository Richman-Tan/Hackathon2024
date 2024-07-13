import React, { useState } from 'react';
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

const Customise = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/vent'); 
};

    const hairs = [hair1, hair2]
    const faces =[ face1, face2]
    const outfits =[outfit1,outfit2]
    const colours = [bodyImg, colour1, colour2]

    const [faceIdx, setFaceIdx]= useState(0);
    const [hairIdx, setHairIdx] = useState(0);
    const [outfitIdx, setOutfitIdx] = useState(0);
    const [colourIdx, setColourIdx] = useState(0);



    const nextface = () => {
        setFaceIdx((faceIdx + 1) % faces.length)
    };

    const nexthair = () => {
        setHairIdx((hairIdx + 1) % hairs.length)
    };

    const nextoutfit = () => {
        setOutfitIdx((outfitIdx + 1) % outfits.length)
    };

    const nextcolour = () => {
        setColourIdx((colourIdx + 1) % colours.length)
    }

    return (
        <div className='wrapper1'>
            <h11 className="text-6xl" style={{ position: 'fixed', top: 10, left: 50 }}>
                ease elves
            </h11>

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

            <div className="flex-wrap flex-wrap2">

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

            <div className = "button buttonsave">
                    <button type = "submit" onClick={handleClick}>Save</button>
            </div>

            <div className="input-box2" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                <input type="text" placeholder='name' required />
            </div>
        </div>

    );

};


export default Customise;