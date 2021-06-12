import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react';
 


export const Option = (props: IOption) => { 
    
    return (
        <select style={props.style}>
            {props.children}
        </select>
    );
};

export const OptionItem = (props: IOption) => 
    <option style={props.style}>
        {props.children}
    </option>
     

export interface IOption extends Pick<HTMLAttributes<ReactNode>, 'children'> {
    style?: CSSProperties;
}