import React from 'react';


export const Paragraph = (props: Pick<IParagraph, 'text'>) => {
    const {text} = props
    
    return (
        <p>{text}</p>
    );
};


export interface IParagraph {
    text: string;
}