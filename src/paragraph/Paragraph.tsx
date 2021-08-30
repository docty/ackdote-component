import classnames from 'classnames';
import  { CSSProperties, HTMLAttributes } from 'react';


export const Paragraph = (props: IParagraph) => {
    const {text, style, className} = props
    
    return (
        <p style={style} className={classnames(className)}>{text}</p>
    );
};


export interface IParagraph extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    text: string;
    style?: CSSProperties;
}