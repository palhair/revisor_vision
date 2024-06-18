import { baseUrl } from '@/constants';
import { makeRequest } from '@/utils/makeRequest';

export default class UsersApi {
	async getUser(userId: string) {
		const response = await makeRequest(`${baseUrl}/users/${userId}`);
		return response.json();
	}

	async getUsers() {
		const response = await makeRequest(`${baseUrl}/users`);
		return response.json();
	}
}
