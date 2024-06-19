import { IUser } from '@/types';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import SwicthIcon from '../SwitchIcon';
import ListAlbums from '../ListAlbums';

interface IUserItemProps {
	user: IUser;
}

const UserItem = ({ user }: IUserItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClickHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '24px',
					justifyContent: 'flex-start',
					padding: '24px 0',
				}}
			>
				<SwicthIcon isOpen={isOpen} onClick={OnClickHandler} />
				<Box>
					<Typography variant="h1" component="h2">
						{user.name}
					</Typography>
				</Box>
			</Box>
			{isOpen && <ListAlbums userId={user.id}></ListAlbums>}
		</>
	);
};

export default UserItem;
