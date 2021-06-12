import React from 'react';
import './button.css'


export const Button = (props: Pick<IButton, 'text'| 'fullWidth'  | 'click'>) => {
    const {text, fullWidth, click} = props
    const length = fullWidth ? '100%' : 'auto' 
    
    
    return (
        <button 
            type="button" 
            style={{width: length}} 
            className={"btn"}
            onClick={click}
        >
            {text}
        </button>
    );
};


export interface IButton {
    text: string;
    fullWidth?: boolean;
    click?: () => void
}