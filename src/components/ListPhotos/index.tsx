import { fetchPhotos } from '@/lib/features/photos/photosSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Box, Typography } from '@mui/material';

interface IListPhotos {
	albumId: string;
}

const ListPhotos = ({ albumId }: IListPhotos) => {
	const dispatch = useAppDispatch();
	const photos = useAppSelector((state) => state.photos.photos);
	const albumPhotos = photos[albumId];

	if (!photos.hasOwnProperty(albumId)) {
		dispatch(fetchPhotos(albumId));
	}

	return (
		<Box
			sx={{
				paddingLeft: '112px',
			}}
		>
			{albumPhotos &&
				albumPhotos.map((photos) => {
					return <Typography key={photos.id}>{photos.title}</Typography>;
				})}
		</Box>
	);
};
export default ListPhotos;
