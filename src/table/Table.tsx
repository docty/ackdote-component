import React, { CSSProperties, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';

export const Table = (props: ITable) => {
    return (
        <table style={props.style} className={classnames([props.className, tableStyling])}>
            {props.children}
        </table>
    );
};

export const TableRow = (props: ITable) => {
    return (
        <tr style={props.style} className={classnames(['text-left', props.className])}>{props.children}</tr>
    );
};


export const TableHeader = (props: ITable) => {
    return (
        <th style={props.style} className={classnames([props.className, tableHeader])}>{props.children}</th>
    );
};

export const TableItem = (props: ITable) => {
    return (
        <td style={props.style} className={classnames([props.className, tableItem])}>{props.children}</td>
    );
};


const tableStyling = style({
	borderCollapse: 'collapse',
	color: '#495057',
	border: '1px solid #eff2f7',
	width: '100%'
})

const tableHeader = style({
	border: '1px solid #eff2f7',
	padding: '0.75rem',
	cursor: 'pointer',
	position: 'relative'
})

const tableItem = style({
	border: '1px solid #eff2f7',
	padding: '0.75rem'
})


export interface ITable extends  Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    style?: CSSProperties;     
}
