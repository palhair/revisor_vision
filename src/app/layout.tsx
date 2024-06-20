import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import CustomTheme from '@/theme/customTheme';
import StoreProvider from '@/components/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<ThemeProvider theme={CustomTheme}>
					<StoreProvider>{children}</StoreProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
