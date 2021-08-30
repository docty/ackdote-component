import { CSSProperties, HTMLAttributes } from 'react';
import classnames from 'classnames';
import './avatar.css';

export const Avatar = (props: IAvatar) => { 
    const allStyle = {
        ...props.style,
        width: `${props.size}px`,
        height: `${props.size}px`
    } as CSSProperties;
    return (
        <div style={allStyle} className={classnames(['dt-avatar', props.className])}>
            {props.text && <p>{props.text}</p>}
            {props.icon && <img src={props.icon} alt={'No Icon'} />}
        </div>
    )
};

export interface IAvatar  extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    style?: CSSProperties;
    size?: number;
    icon?: string;
    text?: string;
}

Avatar.defaultProps = {
    size : 50
}
