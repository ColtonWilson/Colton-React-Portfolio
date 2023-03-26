//Layout skeleton code provided in class
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
     document.getElementById('root')
);

serviceWorker.unregister();
