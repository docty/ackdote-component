import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';



export const Table = (props: ITable) => {
    return (
        <table style={props.style}>
            {props.children}
        </table>
    );
};

export const TableRow = (props: ITable) => {
    return (
        <tr style={props.style}>{props.children}</tr>
    );
};


export const TableHeader = (props: ITable) => {
    return (
        <th style={props.style}>{props.children}</th>
    );
};

export const TableItem = (props: ITable) => {
    return (
        <td style={props.style}>{props.children}</td>
    );
};


export interface ITable extends  Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;     
}
