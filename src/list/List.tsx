import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
import classnames from 'classnames';


export const List = (props: IList) => {

    if (props.type === 'ordered') {
        return (
            <ol style={props.style}>{props.children}</ol>
        );
    } else {
        return (
            <ul style={props.style} className={classnames(props.className)}>{props.children}</ul>
        );
    } 
};


export const ListItem = (props: IListItem) => {
    return (
        <li style={props.style} className={classnames(props.className)}>{props.children}</li>
    );
};

export interface IList extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    type: 'ordered' | 'unordered';
    style?: CSSProperties;
}

export  interface IListItem  extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style' | 'className'> {

}