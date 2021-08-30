import  { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import './option.css';


export const Option = (props: IOption) => { 
    
    return (
        <select className={'dt-select'} style={props.style}>
            {props.children}
        </select>
    );
};

export const OptionItem = (props: IOption) => 
    <option value={props.children?.toString()} style={props.style}>
        {props.children}
    </option>
     

export interface IOption extends Pick<HTMLAttributes<ReactNode>, 'children'> {
    style?: CSSProperties;
}