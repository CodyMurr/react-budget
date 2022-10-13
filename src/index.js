import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { ToggleProvider } from './context/ToggleContext';
import { FormProvider } from './context/forms/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ToggleProvider>
			<Router>
				<FormProvider>
					<App />
				</FormProvider>
			</Router>
		</ToggleProvider>
	</React.StrictMode>,
);
