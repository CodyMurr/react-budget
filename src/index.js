import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { ToggleProvider } from './context/ToggleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ToggleProvider>
			<Router>
				<App />
			</Router>
		</ToggleProvider>
	</React.StrictMode>,
);
