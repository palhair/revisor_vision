import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SwicthIcon from '../SwitchIcon';
import { IAlbum } from '@/types';
import ListPhotos from '../ListPhotos';

interface IAlbumItemProps {
	album: IAlbum;
}

const AlbumItem = ({ album }: IAlbumItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {}, []);

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
					<Typography variant="h2" component="h3">
						{album.title}
					</Typography>
					{isOpen && <ListPhotos albumId={album.albumId} />}
				</Box>
			</Box>
		</>
	);
};
export default AlbumItem;
