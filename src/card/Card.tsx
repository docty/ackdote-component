import classNames from 'classnames';
import  { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
import './card.css';


export const Card = (props: ICard) => {

    return (
            <div className={classNames(['dt-card', props.className])} style={props.style}>
                {props.children}
            </div>
    );
      
};


export interface ICard extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    style?: CSSProperties;
}