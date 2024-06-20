import { ToggleButton, ToggleButtonProps, styled } from '@mui/material';

interface IStyledToggleButtom extends ToggleButtonProps {
	success?: boolean;
}

const StyledToggleButton = styled(ToggleButton)<IStyledToggleButtom>(() => ({
	backgroundColor: 'white',
	color: '#1C1C1C',
	border: 'none',
	borderRadius: '16px',
	padding: '16px 32px',
	flex: '50% 1 1',
}));

export default StyledToggleButton;
