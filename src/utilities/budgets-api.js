import sendRequest from './send-request';

const BASE_URL = '/api/budgets';

export function getAll() {
	return sendRequest(BASE_URL);
}

export function create(budgetData) {
	return sendRequest(BASE_URL, 'POST', budgetData);
}
