import sendRequest from './send-request';

const BASE_URL = '/api/expenses';

export function createExpense(expData) {
	return sendRequest(BASE_URL, 'POST', expData);
}
