import styles from './page.module.css';
import { Box } from '@mui/material';

import ToggleButtons from '@/components/ToggleButtons';
import Content from '@/components/Content';

export default async function Home() {
	return (
		<main className={styles.main}>
			<Box
				sx={{
					width: '744px',
					display: 'flex',
					padding: '0',
					flexDirection: 'column',
				}}
			>
				<ToggleButtons />
				<Content />
			</Box>
		</main>
	);
}
