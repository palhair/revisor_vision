import PhotosApi from '@/api/photos';

const photosApi = new PhotosApi();

const getPhotosByAlbumId = async (albumId: string) => {
	const response = await photosApi.getPhotos(albumId);
	return response;
};
export { getPhotosByAlbumId };
