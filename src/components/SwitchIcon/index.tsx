import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { SyntheticEvent } from 'react';

interface ISwitchProps {
	isOpen: boolean;
	onClick: (value: SyntheticEvent) => void;
}
const SwicthIcon = ({ isOpen, onClick }: ISwitchProps) => {
	return (
		<IconButton
			onClick={onClick}
			color='primary'
			aria-label='addcircle'
			sx={{
				padding: '0',
			}}
		>
			{isOpen ? <RemoveCircle sx={{ fontSize: '32px' }} /> : <AddCircle sx={{ fontSize: '32px' }} />}
		</IconButton>
	);
};

export default SwicthIcon;
