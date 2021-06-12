import React from 'react';


export const Link = (props: Pick<ILink, 'text' | 'href'>) => {
    const {text, href} = props
    
    return (
        <a href={href}>{text}</a>
    );
};


export interface ILink {
    text: string;
    href: string;
}