import { useState } from 'react';


export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState(initialForm);
    
        //Metemos las llaves en target para desestructurar
        const onInputChange = ({ target}) => {
            const { name, value } = target;
            setFormState({
                ...formState,
                //Entre corchetes significa que es computado
                [name]: value
            })
        };

        const onResetForm = () => {
            setFormState( initialForm);
        };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onNewTodo
    }
        
}