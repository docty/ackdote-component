import React, { CSSProperties } from 'react';


export const Paragraph = (props: Pick<IParagraph, 'text' | 'style'>) => {
    const {text, style} = props
    
    return (
        <p style={style}>{text}</p>
    );
};


export interface IParagraph {
    text: string;
    style: CSSProperties;
}