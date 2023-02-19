// @ts-check
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Profil from '../../pages/Profil'
import Dashboard from '../../pages/Dashboard'
import Error from '../Error'

/**
 *  Routing for the app
 * @component
 * @returns {React.ReactElement}
 */
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/profil" element={<Profil />} /> */}
                <Route path="/profil">
                    <Route path=":userId" element={<Profil />} />
                </Route>
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
                <Route path="/dashboard">
                    <Route path=":userId" element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
