import { baseUrl } from '@/constants';
import { makeRequest } from '@/utils/makeRequest';

export default class AlbumsApi {
	async getAlbums(userId: string) {
		const response = await makeRequest(`${baseUrl}/albums/${userId}`);
		return response.json();
	}
}
