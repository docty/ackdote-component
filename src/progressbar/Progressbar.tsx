import React, { CSSProperties, HTMLAttributes } from 'react';
import './progressbar.css';


export const Progressbar = (props: IProgressbar) => {
    
    const allStyle = {
        width: `${props.width}%`,
        ...props.style
    };
    return (
        <div className={'dt-progressbar'}>
            <div style={allStyle} className={'dt-progressbar-inner'}>{props.width}%</div>
        </div>
    );
};



export interface IProgressbar extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
    width?: number;
}
