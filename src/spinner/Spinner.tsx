import React, { CSSProperties } from 'react';
import './spinner.css';

export const Spinner = (props: ISpinner) => { 
    
    if (props.type === 'circle') {
        return  <Circle/>
    } else if (props.type === 'glow') {
        return <Glow/>
    } else if (props.type === 'classic')  {
        return <Classic/>
    } else if (props.type === 'square')  {
        return <Square/>
    } else {
        return <Basic/>
    }
};



const Glow = () => (
    <div className={'dt-spinner-glow'}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

const Circle = () => (
    <div className={'dt-spinner-circle'}>
    </div>
);

const Basic = () => (
    <div className={'dt-spinner-basic'}>
    </div>
);

const Classic = () => (
    <div className={'dt-spinner-classic'}>
    </div>
);

const Square = () => (
    <div className={'dt-spinner-square'}>
		<div className={'dt-spinner-square-inner'}></div>
    </div>
);

export interface ISpinner {
    style?: CSSProperties;
    type: 'glow' | 'circle' | 'basic' | 'classic' | 'square';
}
