import React from 'react';
import { HTMLAttributes } from 'react';



export const List = (props: IList) => {

    if (props.type === 'ordered') {
        return (
            <ol>{props.children}</ol>
        );
    } else {
        return (
            <ul>{props.children}</ul>
        );
    } 
};


export const ListItem = (props: Pick<HTMLAttributes<React.ReactNode>, 'children'>) => {
    return (
        <li>{props.children}</li>
    );
};

export interface IList extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    type: 'ordered' | 'unordered'
}