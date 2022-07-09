import {Button} from "@mui/material";
import { styled } from '@mui/material/styles';

const ThemeButton = styled(Button)({
	variant: 'contained',
	borderColor: '#9074FFFF',
	color: '#fff',
	size: 'large',
	style: {
		margin: '0 auto',
		display: 'block',
	},
	'&:hover': {
		backgroundColor: '#FFB9D1',
		borderColor: '#FFB9D1',
		color: '#9074FFFF',
		fontWeight: 'bold',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#FFB9D1',
		borderColor: '#FFB9D1',
		fontWeight: 'bold',
		color: '#9074FFFF',
	},
	'&:focus': {
		boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
	},
});

export default ThemeButton;
