import UsersApi from '@/api/users';

const userApi = new UsersApi();

const getUserByID = async (data: string) => {
	const response = await userApi.getUser(data);
	return response;
};

const getUsers = async () => {
	const response = await userApi.getUsers();
	return response;
};
export { getUserByID, getUsers };
