import UsersApi from '@/api/users';
import { getAlbumsByUserId } from './almbum';

const userApi = new UsersApi();

const getUserByID = async (data: string) => {
	const response = await userApi.getUser(data);
	return response;
};

const getUsers = async () => {
	const response = await userApi.getUsers();
	for (let i = 0; i < response.length; i++) {
		const albums = await getAlbumsByUserId(response[i].id);
		response[i].albums = albums;
	}
	return response;
};

export { getUserByID, getUsers };
