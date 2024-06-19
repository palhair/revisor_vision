'use client';
import { createTheme } from '@mui/material';

const CustomTheme = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#EDF9FF',
		},
		warning: {
			main: '#FFAF37',
		},
	},
	typography: {
		h1: {
			fontSize: '22px',
			lineHeight: '28.6px',
			fontWeight: '500',
		},
		h2: {
			fontSize: '18px',
			lineHeight: '23.4px',
			fontWeight: '400',
		},
	},
});

export default CustomTheme;
