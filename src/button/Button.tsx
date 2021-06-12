import React, { CSSProperties } from 'react';
import './button.css'


export const Button = (props: Pick<IButton, 'text'| 'fullWidth'  | 'click' | 'style'>) => {
    const {text, fullWidth, style,click} = props
    const length = fullWidth ? '100%' : 'auto' 
    const cssProp = {...style, width: length};
    
    return (
        <button 
            type="button" 
            style={cssProp} 
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
    click?: () => void;
    style?: CSSProperties ;
}