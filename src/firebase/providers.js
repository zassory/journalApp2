import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

//Proveedor para google
export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
                
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok:false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try{

    //Automaticamente lo logea cuando lo crea.
    const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
    const { uid , photoURL } = resp.user;    
        
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    
    return {
        ok: true,
        uid,
        photoURL,
        email,
        displayName,
    }

    }catch(error){        
        const errorMessage = 'Email exist';
        return {
            ok: false,            
            errorMessage,
        }
    }
}