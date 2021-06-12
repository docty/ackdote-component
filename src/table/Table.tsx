import React from 'react';
import { HTMLAttributes } from 'react';



export const Table = (props: ITable) => {
    return (
        <table>
            {props.children}
        </table>
    );
};

export const TableRow = (props: Pick<HTMLAttributes<React.ReactNode>, 'children'>) => {
    return (
        <tr>{props.children}</tr>
    );
};


export const TableHeader = (props: Pick<HTMLAttributes<React.ReactNode>, 'children'>) => {
    return (
        <th>{props.children}</th>
    );
};

export const TableItem = (props: Pick<HTMLAttributes<React.ReactNode>, 'children'>) => {
    return (
        <td>{props.children}</td>
    );
};


export interface ITable extends  Pick<HTMLAttributes<React.ReactNode>, 'children'> {
     
}
