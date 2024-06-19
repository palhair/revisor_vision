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
	const albums = [
		{
			albumId: 'c6f1f41e-2a6c-4a4c-add1-00ed6f1b21dd',
			userId: '9f2483a8-69a1-4f90-9160-ec291ed32fdf',
			title: 'За требует проверки финансовых инновационный нами проверки.',
		},
		{
			albumId: 'c2d48df7-23db-4b1b-a6dc-f2cfe13ce88c',
			userId: '9f2483a8-69a1-4f90-9160-ec291ed32fdf',
			title: 'Шагов сознания обучения постоянное реализация.',
		},
	];
	const user = {
		id: '9f2483a8-69a1-4f90-9160-ec291ed32fdf',
		name: 'Савва',
		username: 'Vyacheslav84',
		email: 'Fedor.OReilly@yandex.ru',
	};
	return (
		<Box>
			{users.map((user) => {
				return <UserItem user={user} key={user.id} />;
			})}
		</Box>
	);
};
export default Catalog;
