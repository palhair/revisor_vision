import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const EmptyFavorites = () => {
	return (
		<Box
			gap={4}
			sx={{
				display: 'flex',
				paddingTop: '206px',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Image src='emptyFavorites.svg' alt='Нет избранного' width={264} height={198} />

			<Stack
				gap={1}
				sx={{
					textAlign: 'center',
				}}
			>
				<Typography variant='h1'>Список избранного пуст</Typography>
				<Typography variant='h2'>Добавляйте изображения, нажимая на звездочки</Typography>
			</Stack>
		</Box>
	);
};

export default EmptyFavorites;
