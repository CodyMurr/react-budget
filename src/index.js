import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { ToggleProvider } from './context/ToggleContext';
import { FormProvider } from './context/forms/FormContext';
import { BudgetProvider } from './context/BudgetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ToggleProvider>
			<Router>
				<BudgetProvider>
					<FormProvider>
						<App />
					</FormProvider>
				</BudgetProvider>
			</Router>
		</ToggleProvider>
	</React.StrictMode>,
);
