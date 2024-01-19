import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Greeting from './components/Greeting'
import Game from './components/Tutorial/Game'
import InputComponent from './components/Type/Type'
import './App.css'
import NeumorphismButton from './components/Tail/Tail'

// function App() {
//     return (
//         <div>
//             <Game />
//         </div>
//     )
// }

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/game">Game</Link>
                        </li>
                        <li>
                            <Link to="/input">Input</Link>
                        </li>
                        <li>
                            <Link to="/tail">Tail</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/game" element={<Game />} />
                <Route path="/input" element={<InputComponent />} />
                <Route path="/tail" element={<NeumorphismButton />} />
            </Routes>
        </Router>
    )
}

export default App
