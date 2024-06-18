import Image from 'next/image';
import styles from './page.module.css';
import AlbumsApi from '@/api/albums';
import { Box, Button, Container, ThemeProvider } from '@mui/material';
import CustomTheme from '@/theme/customTheme';
import StyledToggleButtons from '@/components/ToggleButtons';
const albumsApi = new AlbumsApi();

export default async function Home() {
	console.log('albums');
	const res = await albumsApi.getAlbums('9f2483a8-69a1-4f90-9160-ec291ed32fdf');

	return (
		<ThemeProvider theme={CustomTheme}>
			<main className={styles.main}>
				<Container
					sx={{
						width: '744px',
						display: 'flex',
						padding: '0',
					}}
				>
					<StyledToggleButtons />
				</Container>
			</main>
		</ThemeProvider>
	);
}
