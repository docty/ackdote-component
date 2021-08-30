import classnames from 'classnames';
import { CSSProperties, HTMLAttributes } from 'react';



export const TextArea = (props: ITextArea) => {
    const { change, style, className } = props
    
    
    return (
        <textarea
            style={style} 
            className={classnames(className)}
            onChange={change}
        ></textarea> 
            
    );
};


export interface ITextArea extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    change?: () => void;
    style?: CSSProperties;
}