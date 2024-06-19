import { Box } from '@mui/material';
import AlbumItem from '../AlbumItem';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchAlbums } from '@/lib/features/albums/albumsSlice';

interface IListAlbumsProps {
	userId: string;
}

const ListAlbums = ({ userId }: IListAlbumsProps) => {
	const dispatch = useAppDispatch();
	const albums = useAppSelector((state) => state.usersAlbums.usersAlbums);
	const userAlbums = albums[userId];

	if (!albums.hasOwnProperty(userId)) {
		dispatch(fetchAlbums(userId));
	}

	return (
		<Box
			sx={{
				paddingLeft: '56px',
			}}
		>
			{userAlbums &&
				userAlbums.map((album) => {
					return <AlbumItem album={album} key={album.albumId} />;
				})}
		</Box>
	);
};
export default ListAlbums;
