import React, { CSSProperties, HTMLAttributes } from 'react';
import './alert.css';


export const Alert = (props: IAlert) => {
    
    const onCloseBtn = () => {
        let dd =  document.getElementById('dt-alert-id');
        dd!.style!.display = 'none';
    }

    return (
        <div id={'dt-alert-id'}  className={'dt-alert'} style={props.style}>
            {props.children}
            <span onClick={() => onCloseBtn()} className={'fa fa-close'}></span>
        </div>
    );
};


 

export interface IAlert extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
}
