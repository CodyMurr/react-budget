import { useReducer } from 'react';
import { ADD_EXPENSE, SET_LOADING } from '../types';
import * as expensesAPI from '../../utilities/expenses-api';
import ExpenseReducer from './ExpenseReducer';
import ExpenseContext from './ExpenseContext';

export default function ExpenseState(props) {
	const initialState = {
		expenses: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(ExpenseReducer, initialState);

	async function newExpense(expenseData) {
		setLoading();
		const expense = await expensesAPI.createExpense(expenseData);
		dispatch({
			type: ADD_EXPENSE,
			payload: expense,
		});
	}

	function setLoading() {
		dispatch({ type: SET_LOADING });
	}

	return (
		<ExpenseContext.Provider
			value={{
				expenses: state.expenses,
				loading: state.loading,
				newExpense,
			}}>
			{props.children}
		</ExpenseContext.Provider>
	);
}
