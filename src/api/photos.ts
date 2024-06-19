import { baseUrl } from '@/constants';
import { IPhoto } from '@/types';
import { makeRequest } from '@/utils/makeRequest';

export default class PhotosApi {
	async getPhotos(albumId: string): Promise<IPhoto[]> {
		const response = await makeRequest(`${baseUrl}/photos/${albumId}`);
		return response.json();
	}
}
