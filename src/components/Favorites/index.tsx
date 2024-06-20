import { useAppSelector } from '@/lib/hooks';
import ListPhotos from '../ListPhotos';
import { Box, SxProps } from '@mui/material';
import EmptyFavorites from '../EmptyFavorite';

const style: SxProps = {
	paddingTop: '56px',
};

const Favorites = () => {
	const favorites = useAppSelector((state) => state.favoritePhotos.favoritePhotos);
	return (
		<Box sx={style}>{favorites.length == 0 ? <EmptyFavorites /> : <ListPhotos albumOrId={favorites} withTitle={true} />}</Box>
	);
};
export default Favorites;
