import sendRequest from './send-request';
const BASE_URL = '/api/transactions';

export function createTransaction(transactionData) {
	return sendRequest(BASE_URL, 'POST', transactionData);
}
