import React from 'react';



 export const Heading = (props: Pick<IHeading, 'text'| 'type' >) => {
    const {text, type} = props
    
    if (type === 'H1') {
        return ( <h1> {text} </h1>);
    }else if(type === 'H2') {
        return ( <h2> {text} </h2>);
    }else if(type === 'H3') {
        return ( <h3> {text} </h3>);
    }else if(type === 'H4') {
        return ( <h4> {text} </h4>);
    }else if(type === 'H5') {
        return ( <h5> {text} </h5>);
    }else {
        return ( <h6> {text} </h6>);
    }
     
};


export interface IHeading {
    text: string;
    type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6'
}