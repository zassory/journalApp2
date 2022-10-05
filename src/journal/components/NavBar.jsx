import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { LogoutOutlined , MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

import { startLogout } from '../../store/auth';


export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout() );
  }

  return (
    
    // Al 100 de la pantalla que le resto?
    <AppBar 
        position='fixed'
        sx={{             
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
         }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                    <IconButton 
                        color='warning'
                        onClick={ onLogout }
                        >
                        <LogoutOutlined />
                    </IconButton>

                </Grid>
            </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}
