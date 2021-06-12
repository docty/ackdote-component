import React from 'react';
import './textfield.css';


export const TextField = (props: Pick<ITextField,  'change' | 'type' | 'placeholder'>) => {
    const {type, placeholder,  change} = props
    
    
    return (
        <input 
            type={type}
            className={"dt-input"}
            placeholder={placeholder}
            onChange={change}
        />
    );
};


export interface ITextField {
    type: 'text' | 'password';
    placeholder?: string;
    change?: () => void;
}