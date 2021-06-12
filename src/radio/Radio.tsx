import React, { CSSProperties } from 'react';


export const Radio = (props: IRadio) => { 
    
    return (
        <div style={props.style}>
            <input type="radio" name={props.name} />
            <label>{props.text}</label>
        </div>
    );
};


export interface IRadio {
    style?: CSSProperties;
    text: string;
    name?: string;
}