import { 
    loginWithEmailPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    signInWithGoogle,
} from '../../firebase';
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
                
        const { ok , uid , photoURL , errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        
        if(!ok) return dispatch( logout({errorMessage}) );

        dispatch( login({ uid , displayName , email, photoURL }) );
        
    }
}

export const startLoginWithEmailPassword = ({ email , password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok , uid , photoURL , errorMessage, displayName } = await loginWithEmailPassword({ email , password });
        if(!ok) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid , displayName , email , photoURL }) );
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();//Me salgo de firebase

        dispatch( logout() );
    }
}