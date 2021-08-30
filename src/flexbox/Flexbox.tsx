import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
import classnames from 'classnames';

export const Flexbox = (props: IFlexbox) => {
    
    return (
        <div style={props.style} className={styling(props)}>
            {props.children}
        </div>
    ); 
       
};

const styling = (props:IFlexbox) => {
    const { direction, justifyContent, alignItems, alignContent } = props;
    return classnames([
        'flex flex-wrap',
        `flex-${direction}`,
        `justify-${justifyContent}`,
        `items-${alignItems}`,
        `content-${alignContent}`,
        props.className
    ])
}
 
export interface IFlexbox extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    direction?: 'row' | 'col';
    alignContent?: 'center' | 'start' | 'end' | 'stretch' | 'around' | 'between';
    justifyContent?: 'center' | 'start' | 'end' | 'evenly' | 'around' | 'between';
    alignItems?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
    style?: CSSProperties;
    
}
