import React from 'react';



export const TextArea = (props: Pick<ITextArea,  'change'>) => {
    const { change } = props
    
    
    return (
        <textarea 
            onChange={change}
        ></textarea> 
            
    );
};


export interface ITextArea {
    change?: () => void;
}