'use client';
import React from 'react';
import { ToggleButtonGroup, ToggleButtonGroupProps, styled } from '@mui/material';
import StyledToggleButton from '../CustomToggleButton';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setStoreTab } from '@/lib/features/tabSelector/tabSelectorSlice';

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

export type TTabName = 'catalog' | 'favorites';

const ToggleButtons = () => {
	const dispatch = useAppDispatch();
	const currentTab = useAppSelector((state) => state.tab.tab);
	const [tab, setTab] = React.useState(currentTab);

	const handleChange = (event: React.MouseEvent<HTMLElement>, newTab: TTabName) => {
		setTab(newTab);

		dispatch(setStoreTab(newTab));
	};

	return (
		<StyledToggleButtonGroup
			value={tab}
			exclusive
			onChange={handleChange}
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
