import UsersApi from '@/api/users';
import { getAlbumsByUserId } from './almbum';

const userApi = new UsersApi();

const getUserByID = async (data: string) => {
	const response = await userApi.getUser(data);
	return response;
};

const getUsers = async () => {
	try {
		const response = await userApi.getUsers();

		return response;
	} catch (e) {
		console.log(e);
		throw new Error('afasd');
	}
};

export { getUserByID, getUsers };
