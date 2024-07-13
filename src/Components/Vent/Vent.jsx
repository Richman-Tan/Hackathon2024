import React, { useRef, useState } from 'react';
import './Vent.css';
import buttonLeft from './buttonLeft.png';
import buttonRight from './buttonRight.png';
import buttonAdd from './buttonAdd.png';
import speechBubble from './speechBubble.png';
import { useNavigate } from 'react-router-dom';

const Vent = () => {
	const [inputText, setInputText] = useState('');
	const [isRecording, setIsRecording] = useState(false);
	const recognitionRef = useRef(null);
	const [feelings, setFeelings] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [isEditing, setIsEditing] = useState(false);

	const navigate = useNavigate();

	const handleLogout = () => {
		navigate('/');
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
			<div className="left-side">
				<p className="title">ease elves</p>

				<div className="logout">
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
				</div>
				<img
					src={buttonAdd}
					alt="Add Button"
					className="buttonAdd"
					onClick={handleAddText}
				/>

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
					<button type="submit" onClick={handleAddText}>Send</button>
				</div>

				<div className="link2">
					<p><a href="#" onClick={() => setIsEditing(true)}>edit</a></p>
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
