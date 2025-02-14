import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import Customise from "./Customise.js"; // Fix the file name casing here
import Vent from "./Components/Vent/Vent.jsx";
import Homepage from "./Components/Homepage/Homepage.tsx";

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/"
						element={<LoginForm />} />

					<Route path="/homepage"
						element={<Homepage />} />

					<Route path="/customise"
						element={<Customise />} />

					<Route path="/vent"
						element={<Vent />} />

				</Routes>
			</div>
		</BrowserRouter>
	);
}