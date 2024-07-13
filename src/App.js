import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import Customise from "./Customise.js";
import Vent from "./Vent.js";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/login"
                        element={<LoginForm />} />

                    <Route path="/customise"
                        element={<Customise />} />

                    <Route path="/vent"
                        element={<Vent />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}