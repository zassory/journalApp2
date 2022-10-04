import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button , Grid, Link ,TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { checkingAuthentication , startGoogleSignIn } from '../../store/auth';


export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const {email,password,onInputChange} = useForm({
    email: 'nicolas.programador@gmail.com',
    password: '123456',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] );  

  const onSubmit = ( event ) => {
    //Estan asi porque lo desestructuro de como
    //Vienen por la respuesta
    event.preventDefault();
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
    console.log('onGoogleSignIn');
  }

  return (
    
        <AuthLayout title="Login">
          <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                  name="email"
                  value={ email }
                  onChange={ onInputChange }

                />
              </Grid>{/* Fin Grid */}
              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Password"
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                />
              </Grid>{/* Fin Grid */}
              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                    disabled={ isAuthenticating }
                    fullWidth
                    type="submit"
                    variant='contained'
                    >
                      Login
                  </Button>
                </Grid> {/* Fin Grid */}
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                    disabled={ isAuthenticating }
                    fullWidth
                    onClick={ onGoogleSignIn }
                    variant='contained' 
                    >
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
