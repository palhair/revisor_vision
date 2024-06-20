/* eslint-disable @next/next/no-img-element */
import { IPhoto } from '@/types';
import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import AddFavoritesButton from '../AddFavoritesButton';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toogleFavorites } from '@/lib/features/favoritePhotos/favoritePhotosSlice';
import CustomTooltip from '../CustomTooltip';

interface IPhotoItemProps {
	photo: IPhoto;
}

const PhotoItem = ({ photo }: IPhotoItemProps) => {
	const dispatch = useAppDispatch();

	const favorites = useAppSelector((state) => state.favoritePhotos.favoritePhotos);
	const photoIsFavorite = favorites.find((favorite) => favorite.id == photo.id);

	const [isAdded, setIsAdded] = useState(!!photoIsFavorite);
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const addFavorite = () => {
		dispatch(toogleFavorites(photo));
		setIsAdded(!isAdded);
	};

	return (
		<>
			<CustomTooltip title={photo.title} followCursor>
				<Box sx={{ position: 'relative', cursor: 'pointer' }}>
					<AddFavoritesButton onClick={addFavorite} isAdded={isAdded} />
					<img onClick={handleOpen} src={photo.url} alt={photo.title} width={150} height={150} />
				</Box>
			</CustomTooltip>

			<Modal open={isOpen} onClose={handleClose}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					<img src={photo.url} alt={photo.title} width={600} height={600} />
				</Box>
			</Modal>
		</>
	);
};

export default PhotoItem;
