import { fetchPhotos } from '@/lib/features/photos/photosSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Box, Typography } from '@mui/material';
import PhotoItem from '../PhotoItem';
import { IPhoto } from '@/types';

interface IListPhotos {
	albumOrId: string | IPhoto[];
	withTitle?: boolean;
}

const ListPhotos = ({ albumOrId, withTitle = false }: IListPhotos) => {
	const dispatch = useAppDispatch();
	const photosFromStore = useAppSelector((state) => state.photos.photos);
	let photos: IPhoto[];

	if (typeof albumOrId == 'string') {
		if (!photosFromStore.hasOwnProperty(albumOrId)) {
			dispatch(fetchPhotos(albumOrId));
		}
		photos = photosFromStore[albumOrId];
	} else {
		photos = albumOrId;
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				padding: '0',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					width: '534px',
					flexWrap: 'wrap',
					gap: '42px',
				}}
			>
				{photos &&
					photos.map((photo) => {
						return (
							<Box key={photo.id} sx={{ display: 'flex', flexDirection: 'column', width: '150px', gap: '12px' }}>
								<PhotoItem photo={photo} />
								{withTitle && <Typography variant='subtitle1'>{photo.title}</Typography>}
							</Box>
						);
					})}
			</Box>
		</Box>
	);
};
export default ListPhotos;
