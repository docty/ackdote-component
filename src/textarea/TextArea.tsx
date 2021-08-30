import { CSSProperties } from 'react';



export const TextArea = (props: Pick<ITextArea,  'change' | 'style'>) => {
    const { change, style } = props
    
    
    return (
        <textarea
            style={style} 
            onChange={change}
        ></textarea> 
            
    );
};


export interface ITextArea {
    change?: () => void;
    style?: CSSProperties;
}