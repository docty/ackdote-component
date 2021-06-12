import React, { CSSProperties } from 'react';


export const Link = (props: Pick<ILink, 'text' | 'href' | 'style'>) => {
    const {text, href, style} = props
    
    return (
        <a href={href} style={style}>{text}</a>
    );
};


export interface ILink {
    text: string;
    href: string;
    style?: CSSProperties;
}