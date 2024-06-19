import styles from './page.module.css';
import AlbumsApi from '@/api/albums';
import { Container } from '@mui/material';

import ToggleButtons from '@/components/ToggleButtons';
import { useAppSelector } from '@/lib/hooks';
import Content from '@/components/Content';
const albumsApi = new AlbumsApi();

export default async function Home() {
	console.log('albums');
	const res = await albumsApi.getAlbums('9f2483a8-69a1-4f90-9160-ec291ed32fdf');

	return (
		<main className={styles.main}>
			<Container
				sx={{
					width: '744px',
					display: 'flex',
					padding: '0',
					flexDirection: 'column',
				}}
			>
				<ToggleButtons />
				<Content />
			</Container>
		</main>
	);
}
