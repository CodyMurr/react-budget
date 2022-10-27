import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import UserState from './context/User/UserState';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<UserState>
				<App />
			</UserState>
		</Router>
	</React.StrictMode>,
);
