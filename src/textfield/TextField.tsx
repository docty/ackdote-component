import React, { CSSProperties } from 'react';
import './textfield.css';


export const TextField = (props: ITextField) => {
    const {type, placeholder, style, icon,change} = props
    
    
    return (
        <div style={style} className={'dt-input-wrapper'}>
            {
                icon &&  
                <span className={'dt-input-icon'}>
                    <i className={icon}></i>
                </span>
            }
            <input 
                type={type}
                className={"dt-input"}
                placeholder={placeholder}
                onChange={change}
            />
        </div>
    );
};


export interface ITextField {
    type: 'text' | 'password';
    placeholder?: string;
    change?: () => void;
    style?: CSSProperties;
    icon?: string;
}