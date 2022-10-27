import { useReducer } from 'react';
import {
	GET_BUDGETS,
	ADD_NEW_BUDGET,
	DELETE_BUDGET,
	GET_CATEGORIES,
	SET_LOADING,
} from '../types';
import * as budgetsAPI from '../../utilities/budgets-api';
import { getAll } from '../../utilities/categories-api';
import BudgetContext from './BudgetContext';
import BudgetReducer from './BudgetReducer';

export default function BudgetState(props) {
	const initialState = {
		budgets: [],
		categories: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(BudgetReducer, initialState);

	async function getBudgets() {
		setLoading();
		const res = await budgetsAPI.getAll();
		dispatch({
			type: GET_BUDGETS,
			payload: res,
		});
	}

	async function createBudget(budgetData) {
		setLoading();
		const res = await budgetsAPI.create(budgetData);
		dispatch({
			type: ADD_NEW_BUDGET,
			payload: res,
		});
	}

	async function getCats() {
		setLoading();
		const res = await getAll();
		dispatch({
			type: GET_CATEGORIES,
			payload: res,
		});
	}

	function setLoading() {
		dispatch({ type: SET_LOADING });
	}

	return (
		<BudgetContext.Provider
			value={{
				budgets: state.budgets,
				categories: state.categories,
				loading: state.loading,
				getBudgets,
				createBudget,
				getCats,
			}}>
			{props.children}
		</BudgetContext.Provider>
	);
}
