import React, { Children, CSSProperties, HTMLAttributes } from 'react';
import './tab.css';


export const Tab = (props: ITab) => {
    const itemHead = Children.toArray(props.children);
    const [state, setState] = React.useState<number>(0);
    
    
    return (
        <div>
            <div className={'dt-tab-head'}>
                {itemHead.map((i:any, index:number) => 
                    <TabHeader 
                        text={i.props.text}
                        icon={i.props.icon} 
                        clickTab={() => setState(index)}
                        childIndex={index}
                        selectedIndex={state} 
                    />
                )}
            </div>
            <TabContent>{itemHead[state]}</TabContent>
        </div>
    );
};
 

export const TabItem = (props: ITabItem) => {
    return <div>{props.children}</div>;
};

const TabHeader = ({text, icon, clickTab, childIndex, selectedIndex, style}: ITabHeader) => {
        
    const styleName =  childIndex ===  selectedIndex ? 'dt-tab-header-active': '';    
    return (
        <div 
            className={[styleName, 'dt-tab-header'].join(' ')} 
            style={style}
            onClick={clickTab}
        >
            <span style={{marginRight: '5px'}}>{text}</span>
            {icon && (<i className={icon}></i>) }
        </div>
    );
};

const TabContent = (props: Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style'>) => {
    return (
        <div className={'dt-tab-content'} style={props.style}>{props.children}</div>
    );
};

export interface ITab extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties; 
}

interface ITabItem extends ITab {
    text?: string;
    icon?: string;
}
interface ITabHeader extends ITab {
    text?: string;
    icon?: string;
    clickTab: any;
    childIndex: number;
    selectedIndex: number;
}
