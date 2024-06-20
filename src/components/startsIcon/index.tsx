import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

interface IStarsIconProps {
	active?: boolean;
}

const StarsIcon = ({ active = false }: IStarsIconProps) => {
	return (
		<>
			{active ? (
				<SvgIcon sx={{ fontSize: '32px' }}>
					<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle cx='16' cy='16' r='16' fill='white' />
						<path
							d='M15.0868 8.04641C15.4393 7.25642 16.5607 7.25642 16.9132 8.0464L18.9048 12.5093L23.767 13.0219C24.628 13.1127 24.9746 14.1804 24.3311 14.7596L20.7 18.0284L21.7145 22.8063C21.8943 23.6527 20.9869 24.3124 20.2371 23.8805L16 21.4393L11.7629 23.8805C11.0131 24.3124 10.1057 23.6527 10.2855 22.8063L11.3 18.0284L7.66885 14.7596C7.02538 14.1804 7.37204 13.1127 8.23305 13.0219L13.0952 12.5093L15.0868 8.04641Z'
							fill='#FFAF37'
						/>
					</svg>
				</SvgIcon>
			) : (
				<SvgIcon sx={{ fontSize: '32px' }}>
					<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle cx='16' cy='16' r='16' fill='white' />
						<path
							d='M15.0868 8.04641C15.4393 7.25642 16.5607 7.25642 16.9132 8.0464L18.9048 12.5093L23.767 13.0219C24.628 13.1127 24.9746 14.1804 24.3311 14.7596L20.7 18.0284L21.7145 22.8063C21.8943 23.6527 20.9869 24.3124 20.2371 23.8805L16 21.4393L11.7629 23.8805C11.0131 24.3124 10.1057 23.6527 10.2855 22.8063L11.3 18.0284L7.66885 14.7596C7.02538 14.1804 7.37204 13.1127 8.23305 13.0219L13.0952 12.5093L15.0868 8.04641Z'
							fill='#D0D0D0'
						/>
					</svg>
				</SvgIcon>
			)}
		</>
	);
};
export default StarsIcon;
