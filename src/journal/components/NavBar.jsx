import PropTypes from 'prop-types';
import { LogoutOutlined , MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';


export const NavBar = ({ drawerWidth = 240 }) => {
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

                    <IconButton color='warning'>
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
