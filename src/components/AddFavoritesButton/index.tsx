import { Button } from '@mui/material';
import StarsIcon from '../startsIcon';
import { MouseEventHandler } from 'react';

interface IAddFavoritesButtonProps {
	onClick: MouseEventHandler;
	isAdded: boolean;
}

const AddFavoritesButton = ({ onClick, isAdded = false }: IAddFavoritesButtonProps) => {
	return (
		<>
			<Button
				onClick={onClick}
				sx={{
					position: 'absolute',
					padding: '0',
					minWidth: '0',
					top: '8px',
					right: '8px',
				}}
			>
				<StarsIcon active={isAdded} />
			</Button>
		</>
	);
};
export default AddFavoritesButton;
