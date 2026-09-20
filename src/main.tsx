import React from 'react';
import {createRoot} from 'react-dom/client';
import {initDb} from './db/database';
import App from './App';
import './styles.css';
initDb().catch(console.error);
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
