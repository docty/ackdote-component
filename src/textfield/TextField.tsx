import React, { CSSProperties } from 'react';
import './textfield.css';


export const TextField = (props: Pick<ITextField,  'change' | 'type' | 'placeholder' | 'style'>) => {
    const {type, placeholder, style, change} = props
    
    
    return (
        <input 
            type={type}
            className={"dt-input"}
            style={style}
            placeholder={placeholder}
            onChange={change}
        />
    );
};


export interface ITextField {
    type: 'text' | 'password';
    placeholder?: string;
    change?: () => void;
    style?: CSSProperties;
}