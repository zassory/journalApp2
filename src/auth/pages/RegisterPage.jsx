import { Link as RouterLink } from 'react-router-dom';
import { Button , Grid, Link ,TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
    
        <AuthLayout title="Register">
          <form>
            <Grid container>

              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Nombre completo"
                  type="text"
                  placeholder='Tú nombre aqui'
                  fullWidth
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
              />
              </Grid>{/* Fin Grid */}
              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Password"
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                />
              </Grid>{/* Fin Grid */}
              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
                <Grid item xs={ 12 }>
                  <Button variant='contained' fullWidth>
                    Create count
                  </Button>
                </Grid> {/* Fin Grid */}                
              </Grid>{/* Fin Grid botones*/}
              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{ mr:1 }}>¿Do you have an account?</Typography>
                <Link component={ RouterLink } color='inherit' to="/auth/login">
                  Enter
                </Link>
              </Grid>

            </Grid>

          </form>
        </AuthLayout>
                
  )
}
