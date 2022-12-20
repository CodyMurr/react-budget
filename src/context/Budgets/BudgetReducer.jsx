import {
	GET_BUDGETS,
	ADD_NEW_BUDGET,
	DELETE_BUDGET,
	UPDATE_BUDGET,
	GET_CATEGORIES,
	SET_LOADING,
	ADD_TRANSACTION,
	GET_TRANSACTIONS,
} from '../types';

function BudgetReducer(state, action) {
	switch (action.type) {
		case GET_BUDGETS:
			return {
				...state,
				budgets: action.payload,
				loading: false,
			};
		case ADD_NEW_BUDGET:
			return {
				...state,
				budgets: [...state.budgets, action.payload],
				loading: false,
			};
		case DELETE_BUDGET:
			return {
				...state,
				budgets: state.budgets.splice(state.budgets.indexOf(action.payload), 1),
				loading: false,
			};
		case UPDATE_BUDGET:
			return {
				...state,
				budgets: action.payload,
				loading: false,
			};
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
				loading: false,
			};
		case ADD_TRANSACTION:
			return {
				...state,
				transactions: [...state.transactions, action.payload],
				loading: false,
			};
		case GET_TRANSACTIONS:
			return {
				...state,
				transactions: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}

export default BudgetReducer;
