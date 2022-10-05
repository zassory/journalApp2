import { CircularProgress, Grid } from '@mui/material';

export const CheckingAuth = () => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >{ /* Este es el que envuelve a todo el contenedor */}

      <Grid
        container
        direction='row'
        justifyContent='center'        
      > 
      <CircularProgress color='warning'/>
      </Grid>   
    </Grid>
  )
}
