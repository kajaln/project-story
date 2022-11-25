import React from 'react';
import { Routes } from 'react-router-dom';
import Auth from '../pages/auth/Auth';

function Route(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="signup" element={ <SignUp /> } />
            </Routes>
        </div>
    );
}

export default Route;