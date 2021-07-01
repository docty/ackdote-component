import React, { Children, CSSProperties, HTMLAttributes } from 'react';
import './dropdown.css';

export const Dropdown = (props: IDropdown) => { 
    const itemChild = Children.toArray(props.children) as any;
    
     

    return (
        <div className={'dt-dropdown'}>
            <DropdownHeader 
             text={itemChild[0].props.text}
            />
            <DropdownContent>{itemChild[0].props.children}</DropdownContent>
        </div>
    )
};


export const DropdownItem = (props: IDropdownItem) => {
    return <div>{props.children}</div>;
};

const DropdownHeader = ({text, icon, clickDown, clickOut, style}: IDropdownHeader) => {
        
    return (
        <div 
            className={'dt-dropdown-header'} 
            style={style}
            onMouseEnter={clickDown}
            onMouseOut={clickOut}
        >
            <span style={{marginRight: '5px'}}>{text}</span>
            {icon && (<i className={icon}></i>) }
        </div>
    );
};
 

const DropdownContent = (props: Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style'>) => {
    return (
        <div className={'dt-dropdown-content'} style={props.style}>{props.children}</div>
    );
};
 

export interface IDropdown extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
    type?: 'hover' | 'click';
}

interface IDropdownItem extends IDropdown {
    text?: string;
    icon?: string;
}

interface IDropdownHeader extends IDropdown {
    text?: string;
    icon?: string;
    clickDown?: any;
    clickOut?: any;
}
