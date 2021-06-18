import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';


export const Flexbox = (props: IFlexbox) => {
    const  allStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: props.direction,
        alignContent: props.alignContent,
        alignItems: props.alignItems,
        padding:'5px',
        ...props.style
    };
    return (
        <div style={allStyle}>
            {props.children}
        </div>
    );
      
};

 
export interface IFlexbox extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    direction?: 'row' | 'column';
    alignContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-around' | 'space-between';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-evenly' | 'space-around' | 'space-between';
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    style?: CSSProperties;
    
}