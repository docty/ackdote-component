import  { CSSProperties } from 'react';
import './radio.css';

export const Radio = (props: IRadio) => { 
    
    return (
        <div style={props.style}>
            <span className={'dt-radio-panel'}>
                <input 
                    type="radio"  
                    name={props.name} 
                    className={'dt-radio'}
                    id={props.id} />
            </span>
            <label htmlFor={props.id}>{props.text}</label>
        </div>
    );
};


export interface IRadio {
    style?: CSSProperties;
    text: string;
    name?: string;
    id?: string;
}