import { CSSProperties, HTMLAttributes } from 'react';
import classnames from 'classnames';

export const Cage = (props: ICage) => { 
    
    return (
        <div style={props.style} className={classnames([props.className])}>
            {props.children}    
        </div>
    )
};

export interface ICage  extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    style?: CSSProperties;
}
