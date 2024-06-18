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
});

export default CustomTheme;
