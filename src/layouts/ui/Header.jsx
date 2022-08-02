import logo_dark from 'assets/images/logo_dark.png'
import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PaletteIcon from '@mui/icons-material/Palette';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<div className="header flex space-between item-center">
			<img src={logo_dark} alt="오늘은 로고" width="82" height="50" className="cursor" onClick={() => {
					window.location.href = '/';
			}} />
			<div className='aside flex item-center'>
				<Box sx={{ flexGrow: 0, marginRight: '15px' }}>
					<Tooltip title="Open theme modal">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar sx={{ background: 'linear-gradient(#9074FF, #FFB9D1)' }}>
								<PaletteIcon />
							</Avatar>
						</IconButton>
					</Tooltip>
				</Box>
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar sx={{ background: 'linear-gradient(#9074FF, #FFB9D1)' }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</div>
		</div>
	)
}

export default Header
