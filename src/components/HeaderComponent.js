import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
	
	return (
		<div className="headerComponent">
		  <AppBar position="static">
			<Toolbar variant="dense">
			  <IconButton color="inherit" aria-label="Menu">
				<MenuIcon />
			  </IconButton>
			  <Typography variant="h6" color="inherit">
				Books
			  </Typography>
			</Toolbar>
		  </AppBar>
		</div>
	);
}
export default Header;