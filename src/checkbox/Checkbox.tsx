import  { CSSProperties } from 'react';
import '../index.css'

export const Checkbox = (props: ICheckbox) => { 
    const {style, text, click} = props;
    return (
        <div style={style}>
            <input type="checkbox" onClick={click} />
            <label>{text}</label>
        </div>

    );
};


export interface ICheckbox {
    text: string;
    style?: CSSProperties;
    click?: () => void;
}