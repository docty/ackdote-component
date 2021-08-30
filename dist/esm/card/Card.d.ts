import { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
import './card.css';
export declare const Card: (props: ICard) => JSX.Element;
export interface ICard extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
}
