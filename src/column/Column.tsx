import React from 'react';
import { HTMLAttributes } from 'react';
import classnames from 'classnames';

export const Column = (props: IColumn) => {
    
    return (
        <div style={props.style} className={styling(props)}>
            {props.children}
        </div>
    ); 
       
};

const styling = (props: IColumn) => {
    const { lg, md, sm } = props;
    return classnames([
        lg && `lg:w-${lg}/12`,
        md && `md:w-${md}/12`,
        sm && `sm:w-${sm}/12`,
        props.className
    ])
}


export interface IColumn extends  Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style' | 'className'> {
    lg?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    md?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    sm?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
} 

