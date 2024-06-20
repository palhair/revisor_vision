import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import CustomTheme from '@/theme/customTheme';
import StoreProvider from '@/components/StoreProvider';

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'Тестовое задание',
	description: 'Задание для Revisor vision',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={roboto.className}>
				<ThemeProvider theme={CustomTheme}>
					<StoreProvider>{children}</StoreProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
