import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HospitalProvider } from './context/hospitalsContext';
import { ProgramProvider } from './context/programsContext';
import { UserProvider } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HospitalProvider>
        <ProgramProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </ProgramProvider>
    </HospitalProvider>
);