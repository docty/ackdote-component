import React, { CSSProperties } from 'react';
import './button.css';
import '../font-awesome.min.css';

export const Button = (props: IButton) => {
    const {text, fullWidth, style, icon, trailing ,click} = props
    const length:string = fullWidth ? '100%' : 'auto';
    const direction =  trailing === 'left' ? 'row' : 'row-reverse';

    const cssProp: CSSProperties  = {...style, width: length, flexDirection: direction};
    
    return (
        <button 
            type="button" 
            style={cssProp} 
            className={'btn'}
            onClick={click}
        >
            {icon &&  (<i className={icon} style={{margin: '5px'}}></i>) }
            <span>{text}</span>
        </button>
        
    );
};



export interface IButton {
    text: string;
    fullWidth?: boolean;
    click?: () => void;
    icon?: string;
    trailing?: 'left' | 'right';
    style?: CSSProperties ;
}