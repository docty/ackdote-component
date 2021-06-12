import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';



export const List = (props: IList) => {

    if (props.type === 'ordered') {
        return (
            <ol style={props.style}>{props.children}</ol>
        );
    } else {
        return (
            <ul style={props.style}>{props.children}</ul>
        );
    } 
};


export const ListItem = (props: Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style'>) => {
    return (
        <li style={props.style}>{props.children}</li>
    );
};

export interface IList extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    type: 'ordered' | 'unordered';
    style?: CSSProperties;
}