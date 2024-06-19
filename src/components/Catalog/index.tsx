import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import UserItem from '../UserItem';
import { fetchUsers } from '@/lib/features/users/usersSlice';
import { useEffect } from 'react';
import { Box } from '@mui/material';

const Catalog = () => {
	const dispatch = useAppDispatch();

	const users = useAppSelector((state) => state.users.users);
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<Box>
			{users.map((user) => {
				return <UserItem user={user} key={user.id} />;
			})}
		</Box>
	);
};
export default Catalog;
