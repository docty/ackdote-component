import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
import './card.css';


export const Card = (props: ICard) => {

    return (
            <div className={'dt-card'} style={props.style}>
                {props.children}
            </div>
    );
      
};


export interface ICard extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
}