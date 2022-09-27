import { TurnedInNot } from '@mui/icons-material';
import { Box, Grid , Divider, Drawer, List, ListItem, ListItemText , ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Nicolás Cáceres Latorre
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'Ex non ex aute reprehenderit eiusmod nostrud occaecat est quis anim.' } />
                                </Grid>                        
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

    </Box>
  )
}

SideBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}
