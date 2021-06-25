import React, { CSSProperties } from 'react';
import './spinner.css';

export const Spinner = (props: ISpinner) => { 
    
    if (props.type === 'circle') {
        return  <Circle/>
    } else {
        return <Bar/>
    }
    
};



const Bar = () => (
    <div className={'dt-spinner-bar'}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
);

const Circle = () => (
    <div className={'dt-spinner-circle'}>
        <div className={'dt-spinner-circle-inner'}>
            <div></div>
        </div>
    </div>
);

export interface ISpinner {
    style?: CSSProperties;
    type?: 'bar' | 'circle';
}

Spinner.defaultProps = {
    type: 'bar'
} as ISpinner;