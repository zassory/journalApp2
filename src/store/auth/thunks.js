import { signInWithGoogle } from '../../firebase';
import {
    login,
    logout,
    checkingCredentials,
} from './authSlice';

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() ); //State

        //Desde el thunk uso mis proveedores
        const result = await signInWithGoogle();//Firebase        
        if( !result.ok ) return dispatch( logout( result.errorMessage ) );
        //delete result.ok;
        dispatch( login( result ) );
    }
}