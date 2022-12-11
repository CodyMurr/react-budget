import { useReducer } from 'react';
import {
	GET_BUDGETS,
	ADD_NEW_BUDGET,
	DELETE_BUDGET,
	GET_CATEGORIES,
	SET_LOADING,
	UPDATE_BUDGET,
} from '../types';
import { useNavigate } from 'react-router-dom';
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

	async function deleteBudget(budgetId) {
		setLoading();
		await budgetsAPI.deleteBudget(budgetId);
		dispatch({
			type: DELETE_BUDGET,
			payload: state.budgets,
		});
	}

	async function updateBudget(budgetId, budgetData) {
		setLoading();
		const budget = state.budgets.find((b) => b._id === budgetId);
		budget.amount = budgetData.amount;
		await budgetsAPI.updateBudget(budgetId, budgetData);
		dispatch({
			type: UPDATE_BUDGET,
			payload: state.budgets,
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

	const navigate = useNavigate();

	function routeChange(path) {
		navigate(path);
	}

	function generateKey() {
		const range = (start, stop, step) =>
			Array.from(
				{ length: (stop - start) / step + 1 },
				(_, i) => step * i + start,
			);

		const letters = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((n) =>
			String.fromCharCode(n),
		);
		const numbers = range(0, 9, 1);
		const special = '!@#$%^&*,.?|'.split('');

		const arr = [letters, numbers, special];

		const keyArr = [];
		const randomLen = Math.floor(Math.random() * (10 - 5) + 5);
		while (keyArr.length <= randomLen) {
			const random1 = Math.floor(Math.random() * arr.length);
			const random2 = Math.floor(Math.random() * arr[random1].length);
			keyArr.push(arr[random1][random2]);
		}

		return keyArr;
	}

	return (
		<BudgetContext.Provider
			value={{
				budgets: state.budgets,
				categories: state.categories,
				loading: state.loading,
				getBudgets,
				createBudget,
				deleteBudget,
				updateBudget,
				getCats,
				routeChange,
				generateKey,
			}}>
			{props.children}
		</BudgetContext.Provider>
	);
}
