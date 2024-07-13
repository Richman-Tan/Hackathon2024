import React, { useState } from 'react';
import './Components/Customise/style.css';
import bodyImg from './assets/IMG_0773.PNG';
import face1 from './assets/faces/IMG_0775.PNG';
import face2 from './assets/faces/IMG_0778.PNG';
import hair1 from './assets/hairs/IMG_0774.PNG';
import hair2 from './assets/hairs/IMG_0776.PNG';
import outfit1 from './assets/outfits/IMG_0779.PNG';
import outfit2 from './assets/outfits/IMG_0780.PNG';

const Customise = () => {

    const hairs = [hair1, hair2]
    const faces =[ face1, face2]
    const outfits =[outfit1,outfit2]

    const [faceIdx, setFaceIdx]= useState(0);
    const [hairIdx, setHairIdx] = useState(0);
    const [outfitIdx, setOutfitIdx] = useState(0);


    const nextface = () => {
        setFaceIdx((faceIdx + 1) % faces.length)
    };

    const nexthair = () => {
        setHairIdx((hairIdx + 1) % hairs.length)
    };

    const nextoutfit = () => {
        setOutfitIdx((outfitIdx + 1) % outfits.length)
    };

    return (
        <div className='wrapper1'>
            <h11 className="text-4xl" style={{ position: 'fixed', top: 0, left: 50 }}>
                ease elves
            </h11>

            <div className="flex-wrap">
                <div className="image-container">
                    <img src={bodyImg} alt="body" />
                    <img src={faces[faceIdx]} alt="face" />
                    <img src={hairs[hairIdx]} alt="hair" />
                    <img src={outfits[outfitIdx]} alt="outfit" />
                </div>

                <div className="buttonBox">
                    <button id="nextface" onClick={nextface}>face➡</button>
                    <button id="nexthair" onClick={nexthair}>hair➡</button>
                    <button id="nextoutfit" onClick={nextoutfit}>outfit➡</button>
                </div>
            </div>

            <div className="input-box1" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                <input type="text" placeholder='name' required />
            </div>
        </div>

    );

};


export default Customise;