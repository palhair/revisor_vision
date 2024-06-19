import { baseUrl } from '@/constants';
import { IAlbum } from '@/types';
import { makeRequest } from '@/utils/makeRequest';

export default class AlbumsApi {
	async getAlbums(userId: string): Promise<IAlbum[]> {
		const response = await makeRequest(`${baseUrl}/albums/${userId}`);
		return response.json();
	}
}
