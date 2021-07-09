import React, { CSSProperties } from 'react';
import './textfield.css';


export const TextField = (props: ITextField) => {
    const {type, placeholder, style, icon,change, value} = props
    
    
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
                value={value}
            />
        </div>
    );
};


export interface ITextField {
    type: 'text' | 'password';
    placeholder?: string;
    change?: (e:any) => void;
    style?: CSSProperties;
    icon?: string;
    value?: string;
}