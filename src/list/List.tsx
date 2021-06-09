import React from 'react';
import { HTMLAttributes } from 'react';








export const List = (props: IList) => {
    const listStyle = props.bulletLess ?  'none' : '' ;
    return (
        <ul style={{ listStyleType: listStyle }}>{props.children}</ul>
    );
};


export const ListItem = (props: Pick<HTMLAttributes<React.ReactNode>, 'children'>) => {
    return (
        <li>{props.children}</li>
    );
};

interface IList extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    bulletLess?: boolean
}