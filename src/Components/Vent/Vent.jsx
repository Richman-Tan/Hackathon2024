import React, { useRef, useState } from 'react';
import './Vent.css';
import buttonLeft from './buttonLeft.png';
import buttonRight from './buttonRight.png';
import buttonAdd from './buttonAdd.png';
import speechBubble from './speechBubble.png';
import { useNavigate } from 'react-router-dom';
import colour from '../../assets/colours/colour1.png';
import face from '../../assets/faces/IMG_0775.PNG';
import hair from '../../assets/hairs/IMG_0774.PNG';
import outfit from '../../assets/outfits/IMG_0779.PNG';

const Vent = () => {
	const [inputText, setInputText] = useState('');
	const [isRecording, setIsRecording] = useState(false);
	const recognitionRef = useRef(null);
	const [feelings, setFeelings] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [isEditing, setIsEditing] = useState(false);
	const [speechBubbleText, setSpeechBubbleText] = useState('');

	const responses = [
		"It will be okay",
		"Hang in there",
		"You got this",
		"Stay strong",
		"Things will get better",
		"Take a deep breath",
		"You are not alone",
		"Keep pushing forward"
	];

	

	const navigate = useNavigate();

	const handleLogout = () => {
		navigate('/');
	};

	const handleCustomise = () => {
		navigate('/customise');
	};

	const handleAddResponse = () => {
		const randomIndex = Math.floor(Math.random() * responses.length);
		setSpeechBubbleText(responses[randomIndex]);
	};


	const handleAddText = () => {
		if (inputText.trim() !== '') {
			const updatedFeelings = [...feelings];
			if (isEditing && currentIndex !== -1) {
				updatedFeelings[currentIndex] = inputText;
				setIsEditing(false);
			} else {
				updatedFeelings.push(inputText);
				setCurrentIndex(updatedFeelings.length - 1);
			}
			setFeelings(updatedFeelings);
			setInputText('');
		}
	};

	const handleDeleteText = (index) => {
		const updatedFeelings = feelings.filter((_, i) => i !== index);
		setFeelings(updatedFeelings);
		if (currentIndex >= updatedFeelings.length) {
			setCurrentIndex(updatedFeelings.length - 1);
			setInputText(updatedFeelings[updatedFeelings.length - 1] || '');
		} else {
			setInputText(updatedFeelings[currentIndex] || '');
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
			setInputText(feelings[currentIndex - 1]);
			setIsEditing(true);
		}
	};

	const handleNext = () => {
		if (currentIndex < feelings.length - 1) {
			setCurrentIndex(currentIndex + 1);
			setInputText(feelings[currentIndex + 1]);
			setIsEditing(true);
		}
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
			<div className="flex-wrap wrappersof">
				<div className="image-container">
					<img src={colour} alt="colour" />
					<img src={face} alt="face" />
					<img src={hair} alt="hair" />
					<img src={outfit} alt="outfit" />
				</div>
			</div>
			<div className="left-side">
				<p className="title">ease elves</p>

				<div className="logout" style={{ position: 'fixed', top: 40, right: 20, zIndex: 1000 }}>
					<button type="submit" onClick={handleLogout}>logout</button>
				</div>

				<img
					src={buttonLeft}
					alt="Button"
					className="buttonLeft"
					onClick={handlePrev}
				/>
				<img
					src={buttonRight}
					alt="Button"
					className="buttonRight"
					onClick={handleNext}
				/>
				<div className="speechBubble">
					<img
						src={speechBubble}
						alt="Speech Bubble"
						className="speechBubble"
					/>
					<p style={{ position: 'fixed', top: 290, left: 180 }}>{speechBubbleText}</p>
				</div>

				<div className="input-box input-box1">
					<input
						type="text"
						placeholder="I'm worried about..."
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
					/>
					<button type="button" onClick={handleVoiceInput} style={{ position: 'fixed', right: 110 }}>
						{isRecording ? 'stop' : 'record'}
					</button>
				</div>

				<div className="texts">
					<p>elfred</p>
				</div>

				<div className="button send">
					<button type="submit" onClick={() => { handleAddText(); handleAddResponse(); }} style={{ position: 'fixed', top: -95, right: -280, zIndex: 1000 }}>send</button>
				</div>

				<div className="link2">
					<p><a href="#" onClick={handleCustomise} >edit</a></p>
				</div>
			</div>

			<div className="right-side">
				{currentIndex >= 0 && (
					<div className="saved-entry">
						<p>{feelings[currentIndex]}</p>
					</div>
				)}
				<div className="delete">
					{currentIndex >= 0 && (
						<button onClick={() => handleDeleteText(currentIndex)}>delete</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Vent;