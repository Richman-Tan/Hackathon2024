import React, { useRef, useState } from 'react';
import './Vent.css';
import buttonLeft from './buttonLeft.png';
import buttonRight from './buttonRight.png';
import buttonAdd from './buttonAdd.png';
import speechBubble from './speechBubble.png';
import { useNavigate } from 'react-router-dom';

const Vent = () => {
    const [speechText, setSpeechText] = useState('');
    const [inputText, setInputText] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const recognitionRef = useRef(null);
    const navigate = useNavigate();


    const handleAddText = () => {
        setSpeechText('Text added on button click.'); // Replace with text
    };

    const handleLogout = () => {
        navigate('/');
    };

    const handleVoiceInput = () => {
        if (!isRecording) {
            recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognitionRef.current.lang = 'en-US';
            recognitionRef.current.interimResults = false;
            recognitionRef.current.maxAlternatives = 1;

            recognitionRef.current.start();

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInputText(transcript);
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error', event.error);
            };

            setIsRecording(true);
        } else {
            recognitionRef.current.stop();
            setIsRecording(false);
        }
    };

    return (
        <div id="con">
            <p className="title">ease elves</p>

            <div className="logout">
                <button type="submit" onClick={handleLogout}>
                    logout
                </button>
            </div>

            <img src={buttonLeft} alt="Button" className="buttonLeft" />
            <img src={buttonRight} alt="Button" className="buttonRight" />
            <div className="speechBubble">
                <img src={speechBubble} alt="Button" className="speechBubble" />
            </div>
            <img src={buttonAdd} alt="Button" className="buttonAdd" onClick={handleAddText} />

            <div className="input-box input-box1">
                <input
                    type="text"
                    placeholder="I'm worried about..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="button" onClick={handleVoiceInput}>
                    {isRecording ? 'Stop' : 'Start'}
                </button>
            </div>



            <div className="texts">
                <p>alfred</p>
            </div>

            <div className="button button1">
                <button type="submit">Send</button>
            </div>

            <div className="link2">
                <p>
                    <a href="#">edit</a>
                </p>
            </div>
        </div>
    );
};

export default Vent;
