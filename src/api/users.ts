import { baseUrl } from '@/constants';
import { IUser } from '@/types';
import { makeRequest } from '@/utils/makeRequest';

export default class UsersApi {
	async getUser(userId: string): Promise<IUser> {
		const response = await makeRequest(`${baseUrl}/users/${userId}`);
		return response.json();
	}

	async getUsers(): Promise<IUser[]> {
		const response = await makeRequest(`${baseUrl}/users`);
		return response.json();
	}
}
