import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button , Grid, Link ,TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth'; //This is my action

const formData = {
  email: '',
  password:'',
  displayName:'',
}

const formValidations = {
  email: [(value)=> value.includes('@'),'email must have @'],
  password: [(value)=> value.length >=6, 'Password must be greater than six (6) letters'],
  displayName: [(value)=> value.length >=1,'Name is required'],
}

//-------------------------------------------------

export const RegisterPage = () => {

  const { status , errorMessage } = useSelector( state => state.auth );
  //memoriza SOLO cuando el status este en 'checking'<<-------
  //Solo cambia si el status cambia ( dependencia )
  const isCheckingAuthentication = useMemo(()=> status === 'checking',[ status ]);  

  const dispatch = useDispatch();
  const [ formSubmitted,setFormSubmitted ] = useState(false);

  const {
      formState  ,displayName,email,password,onInputChange,
      isFormValid,displayNameValid,emailValid,passwordValid,
      } = useForm(formData,formValidations);

  

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true); //Como cambia esto ?
    //Cambia al hacer click, ahi comienzan a trabajar las validaciones
    //Segui la traza
    if(!isFormValid) return;
    //console.log('Quiero ver como es el formState',formState);
    dispatch( startCreatingUserWithEmailPassword(formState) );//Como venia la data en el formState?
  }


  return (
    
        <AuthLayout title="Register">
          {/* <h1>FormValid { isFormValid ? 'Ok' : 'Not-Ok' }</h1> */}
          <form onSubmit={ onSubmit }>
            <Grid container>

              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Nombre completo"
                  type="text"
                  placeholder='Tú nombre aqui'
                  fullWidth
                  name="displayName"
                  value={ displayName }
                  onChange={ onInputChange }
                  error={ !!displayNameValid && formSubmitted }
                  helperText={ displayNameValid }
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                  name="email"
                  value={ email }
                  onChange={ onInputChange }
                  error={ !!emailValid && formSubmitted }
                  helperText={ emailValid }
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
                  error={ !!passwordValid && formSubmitted }
                  helperText={ passwordValid }
                />
              </Grid>{/* Fin Grid */}
              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>

                <Grid 
                  item 
                  xs={ 12 }
                  display={ !!errorMessage ? '':'none' }//Si es verdadero se muestra, si no es none
                  >
                  <Alert severity='error'>
                    { errorMessage }
                  </Alert>
                </Grid>

                <Grid item xs={ 12 }>
                  <Button
                    disabled={ isCheckingAuthentication } //Deshabilitado si esta haciendo la autenticacion
                    fullWidth
                    type="submit"
                    variant='contained'
                    >
                      Create a Count
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
