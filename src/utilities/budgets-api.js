import sendRequest from './send-request';

const BASE_URL = '/api/budgets';

export function getAll() {
	return sendRequest(BASE_URL);
}

export function showBudgetDetail(budgetId) {
	return sendRequest(`${BASE_URL}/${budgetId}`);
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

export function addTransaction(budgetId, transactionData) {
	return sendRequest(
		`${BASE_URL}/${budgetId}/transactions/new`,
		'POST',
		transactionData,
	);
}

export function viewTransactions(budgetId) {
	return sendRequest(`${BASE_URL}/${budgetId}/transactions`);
}
