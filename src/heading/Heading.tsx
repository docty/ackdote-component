import { CSSProperties } from 'react';



 export const Heading = (props: IHeading) => {
    const {text, type, style} = props
    
    if (type === 'H1') {
        return ( <h1 style={style}> {text} </h1>);
    }else if(type === 'H2') {
        return ( <h2 style={style}> {text} </h2>);
    }else if(type === 'H3') {
        return ( <h3 style={style}> {text} </h3>);
    }else if(type === 'H4') {
        return ( <h4 style={style}> {text} </h4>);
    }else if(type === 'H5') {
        return ( <h5 style={style}> {text} </h5>);
    }else {
        return ( <h6 style={style}> {text} </h6>);
    }
     
};


export interface IHeading {
    text: string;
    type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
    style?: CSSProperties;
}