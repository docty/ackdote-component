import React from 'react';
import { HTMLAttributes } from 'react';
import classnames from 'classnames';

export const Container = (props: IContainer) => {
    
    return (
        <div style={props.style} className={styling(props)}>
            {props.children}
        </div>
    ); 
       
};

const styling = (props: IContainer) => {
    const { radius, position } = props;

    return classnames([
        'p-1',
        radius && 'rounded-xl',
        position && position,
        props.className
    ])
}

interface IContainer extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style' | 'className'>  {
    radius?: boolean;
    position?: 'relative' | 'absolute' | 'fixed'
} 

