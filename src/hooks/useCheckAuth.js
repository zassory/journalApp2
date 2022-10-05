import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';

import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { login,logout } from '../store/auth';


export const useCheckAuth = () => {

    const { status } = useSelector( (state) => {
        return state.auth;
    } ); 

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async(user) => {
            if(!user) return dispatch( logout() );

            const { uid , email , displayName , photoURL } = user;
            dispatch( login({ uid,email,displayName,photoURL }) );
        } )
    }, []);
    
    return {
        status,
    }
}

//1. Primero obtengo el status
//