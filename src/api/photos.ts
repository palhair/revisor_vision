import { baseUrl } from '@/constants';
import { makeRequest } from '@/utils/makeRequest';

export default class PhotosApi {
	async getPhotos(albumId: string) {
		const response = await makeRequest(`${baseUrl}/photos/${albumId}`);
		return response.json();
	}
}
