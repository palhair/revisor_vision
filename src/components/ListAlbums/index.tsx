import { getAlbumsByUserId } from '@/services/almbum';
import { Box } from '@mui/material';
import AlbumItem from '../AlbumItem';
import useFetchAlbum from '../hooks/useFetchAlbum';

interface IListItemProps {
	userId: string;
}

const ListAlbums = async ({ userId }: IListItemProps) => {
	const albums = await useFetchAlbum(userId);
	return (
		<Box>
			{albums.map((album) => {
				return <AlbumItem album={album} key={album.albumId} />;
			})}
		</Box>
	);
};
export default ListAlbums;
