import { CSSProperties, HTMLAttributes } from 'react';
import classnames from 'classnames';


export const Link = (props: ILink) => {
    const {text, href, style, className} = props
    
    return (
        <a href={href} style={style} className={classnames(className)}>{text}</a>
    );
};


export interface ILink extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    text: string;
    href: string;
    style?: CSSProperties;
}