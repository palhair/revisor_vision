import AlbumsApi from '@/api/albums';
import { getUsers } from './user';
import { IAlbum, TUsersAlbums } from '@/types';

const albumApi = new AlbumsApi();

const getAlbumsByUserId = async (userId: string) => {
	const response = await albumApi.getAlbums(userId);
	return response;
};

const getUsersAlbums = async () => {
	const users = await getUsers();
	const usersAlbums: TUsersAlbums = {};

	for (let i = 0; i < users.length; i++) {
		usersAlbums[users[i].id] = await getAlbumsByUserId(users[i].id);
	}

	return usersAlbums;
};

export { getAlbumsByUserId, getUsersAlbums };
