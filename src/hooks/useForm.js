import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {} , formValidations = {}) => {
  
    const [formState, setFormState] = useState(initialForm);
    const [ formValidation,setFormValidation ] = useState({});

    useEffect(() => {          
        createValidators();
    }, [ formState ]);//Cada vez que cambia el formState

    const isFormValid = useMemo( () => {
        
        //Recorro las validaciones
        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[formValue] !== null ) return false;
        }

        return true;

    }, [formValidation] );
    

    const onInputChange = ({ target }) => {
        const { name , value } = target;
        setFormState({
            ...formState,
            [ name ]: value //Esto es como dinamico, repasar esto o verlo con C
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {
        const formCheckedValues = {};

        //i walk my array
        for (const formField of Object.keys( formValidations )) {
            //console.log(formField);
            //Desestructuro mi fn y mi mensaje de error
            //De mi formValidation basado en mi formField;
            //formField sería el indice
            const [ fn,errorMessage ] = formValidations[formField];

            //Si se cumple se almacena un null y es valida, en caso contrario
            //Envía el mensaje de error
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
        console.log(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    
        ...formValidation,//Voy a esparcir este objeto
        isFormValid,
    }

}

