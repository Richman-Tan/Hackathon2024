import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

	const navigate = useNavigate();

	const handleLogout = () => {
		navigate('/');
	};

	const handleEdit = () => {
	};

	const handleNewElf = () => {
		navigate('/customise');
	};

	return (
		<div id="con">
			<h11 className="text-6xl" style={{ position: 'fixed', top: 10, left: 50 }}>
				ease elves
			</h11>

			<div className="logout" style={{ position: 'fixed', top: 40, right: 20, zIndex: 1000 }}>
				<button type="submit" onClick={handleLogout}>logout</button>
			</div>

			<div style={{
				position: "fixed", 
				bottom: 40,
    			left: "50%",
    			transform: "translateX(-50%)",
    			zIndex: 1000,
    			display: "flex",
    			gap: "30px",
    			fontSize: "1.2rem",
    			color: "#778D63",
  			}}
			>
				<button style={{
      				color: "#778D63",
      					backgroundColor: "#CAD7BE",
      					borderRadius: "20px",
      					marginRight: "1px",
      					display: "flex",
      					justifyContent: "center",
      					alignItems: "center",
      					fontSize: "1.2rem",
      					padding: "10px 20px",
      					border: "none",
      					cursor: "pointer",
    			}} onClick={handleEdit} > edit </button>
  				
				<button style={{
      				color: "#778D63",
      				backgroundColor: "#CAD7BE",
      				borderRadius: "20px",
      				marginRight: "1px",
      				display: "flex",
      				justifyContent: "center",
      				alignItems: "center",
      				fontSize: "1.2rem",
      				padding: "10px 20px",
      				border: "none",
      				cursor: "pointer",
   				 }} onClick={handleNewElf} > new </button>
				 
			</div>

		</div >
	);
};

export default Homepage;