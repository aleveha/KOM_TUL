import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import * as serviceWorker from './service/serviceWorker';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

serviceWorker.unregister();
