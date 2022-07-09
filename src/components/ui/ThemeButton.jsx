import {Button} from "@mui/material";
import { styled } from '@mui/material/styles';

const ThemeButton = styled(Button)({
	className: 'theme-btn',
	variant: 'contained',
	color: 'primary',
	size: 'large',
	style: {
		margin: '0 auto',
		display: 'block',
	}
});

export default ThemeButton;
