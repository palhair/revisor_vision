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
	},
});

export default CustomTheme;
