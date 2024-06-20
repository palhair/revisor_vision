import { TooltipProps, styled, Tooltip, tooltipClasses } from '@mui/material';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(
	({ theme }) => ({
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: '#000000B0',
			color: '#FFFFFF',
			maxWidth: 150,
			fontSize: '12px',
			lineHeight: '15.6px',
			marginTop: '5px',
		},
	})
);

export default CustomTooltip;
