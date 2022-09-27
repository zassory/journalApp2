import { Link as RouterLink } from 'react-router-dom';
import { Button , Grid, Link ,TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {
  return (
    
        <AuthLayout title="Login">
          <form>
            <Grid container>
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
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid> {/* Fin Grid */}
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant='contained' fullWidth>
                    <Google />
                    <Typography sx={{ ml:1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>{/* Fin Grid botones*/}
              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Create a count
                </Link>
              </Grid>

            </Grid>

          </form>
        </AuthLayout>            
  )
}
