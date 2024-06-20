import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import UserItem from '../UserItem';
import { fetchUsers } from '@/lib/features/users/usersSlice';
import { useEffect } from 'react';
import { Box, SxProps } from '@mui/material';

const Catalog = () => {
	const dispatch = useAppDispatch();
	const style: SxProps = {
		padding: '16px 0',
	};

	const users = useAppSelector((state) => state.users.users);
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<Box sx={style}>
			{users.map((user) => {
				return <UserItem user={user} key={user.id} />;
			})}
		</Box>
	);
};
export default Catalog;
