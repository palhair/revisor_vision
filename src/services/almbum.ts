import AlbumsApi from '@/api/albums';

const albumApi = new AlbumsApi();

const getAlbumsByUserId = async (userId: string) => {
	const response = await albumApi.getAlbums(userId);
	return response;
};

export { getAlbumsByUserId };
