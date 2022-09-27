import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children , title='' }) => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >{ /* Este es el que envuelve a todo el contenedor */}

      <Grid item
        className='box-shadow'
        xs={ 3 }
        sx={{ 
            backgroundColor: 'white', 
            borderRadius: 2 ,
            padding: 3, 
            width: { sm: 450 },
        }}
      >        
        <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

        { children }

      </Grid>
    </Grid>
  )
}
