import sendRequest from './send-request';

const BASE_URL = '/api/budgets';

export function getAll() {
	return sendRequest(BASE_URL);
}

export function create(budgetData) {
	return sendRequest(BASE_URL, 'POST', budgetData);
}

export function deleteBudget(budgetId) {
	return sendRequest(`${BASE_URL}/${budgetId}`, 'DELETE');
}

export function updateBudget(budgetId, budgetData) {
	return sendRequest(`${BASE_URL}/${budgetId}`, 'PUT', budgetData);
}
