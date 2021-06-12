import React, { HTMLAttributes, ReactNode } from 'react';
 


export const Option = (props: IOption) => { 
    
    return (
        <select>
            {props.children}
        </select>
    );
};

export const OptionItem = (props: IOption) => <option>{props.children}</option>
     

export interface IOption extends Pick<HTMLAttributes<ReactNode>, 'children'> {
     
}