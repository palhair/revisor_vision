'use client';
import React from 'react';
import { ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps, ToggleButtonProps, styled } from '@mui/material';
import StyledToggleButton from '../CustomToggleButton';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>(({ theme }) => ({
	display: 'flex',
	'.MuiButtonBase-root.Mui-selected': {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.main,
	},
	'.MuiToggleButtonGroup-lastButton, .MuiToggleButtonGroup-firstButton': {
		borderRadius: '16px',
	},
}));

const ToggleButtons = () => {
	const [tab, setTab] = React.useState('catalog');

	const handleAlignment = (event: React.MouseEvent<HTMLElement>, newTab: string) => {
		setTab(newTab);
	};

	return (
		<StyledToggleButtonGroup
			value={tab}
			exclusive
			onChange={handleAlignment}
			aria-label='text alignment'
			sx={{
				width: '100%',
			}}
		>
			<StyledToggleButton value='catalog' aria-label='catalog'>
				Каталог
			</StyledToggleButton>
			<StyledToggleButton value='favorites' aria-label='favorites'>
				Избранное
			</StyledToggleButton>
		</StyledToggleButtonGroup>
	);
};

export default ToggleButtons;
