'use client';
import { useAppSelector } from '@/lib/hooks';
import Catalog from '../Catalog';
import Favorites from '../Favorites';
import { Box } from '@mui/material';

const Content = () => {
	const tabSelecor = useAppSelector((state) => state.tab.tab);

	return <Box>{tabSelecor == 'catalog' ? <Catalog /> : <Favorites />}</Box>;
};

export default Content;
