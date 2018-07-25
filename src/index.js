import React from 'react';
import { render } from 'react-dom';

//import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Router
import AppRoutes from './routes'

// Assets
import './index.css';

render(
    <Router>
        <AppRoutes />
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();