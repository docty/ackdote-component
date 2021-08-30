import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
import './table.css';
export declare const Table: (props: ITable) => JSX.Element;
export declare const TableRow: (props: ITable) => JSX.Element;
export declare const TableHeader: (props: ITable) => JSX.Element;
export declare const TableItem: (props: ITable) => JSX.Element;
export interface ITable extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
}
