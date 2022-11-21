import { ADD_EXPENSE } from '../types';

export default function ExpenseReducer(state, action) {
	switch (action.type) {
		case ADD_EXPENSE:
			return {
				...state,
				expenses: action.payload,
			};
		default:
			return state;
	}
}
