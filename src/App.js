import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import login from "./login";
import customise from "./customise";
import vent from "./vent";

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/login"
						element={<p>login</p>} />

					<Route path="/customise"
						element={<p>customise</p>} />

					<Route path="/vent"
						element={<p>vent</p>} />

				</Routes>
			</div>
		</BrowserRouter>
	);
}

