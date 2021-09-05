import React, { Children, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { style } from 'typestyle'


export const Tab = (props: ITab) => {
    const itemHead = Children.toArray(props.children);
    const [state, setState] = React.useState<number>(0);
    const alignment =  props.direction === 'row' ? 'col' : 'row'
    
    return (
        <div className={classnames(['relative', 'flex', `flex-${props.direction}`])}>
           <div className={classnames(['flex', `flex-${alignment}`, 'w-full'])}>
                {itemHead.map((i:any, index:number) => 
                    <TabHeader 
                        text={i.props.text}
                        icon={i.props.icon} 
                        clickTab={() => setState(index)}
                        childIndex={index}
                        selectedIndex={state}
                        direction={props.direction} 
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


const TabHeader = ({text, icon, clickTab, childIndex, selectedIndex, direction, styling}: ITabHeader) => {
        
    const styleName =  childIndex ===  selectedIndex ? ( 
        direction === 'col' 
        ? style({borderBottom: 'none', borderTopColor: styling?.activeBorderColor && '#3d234f', borderTopWidth: '3px', transition: 'border-color ease-in-out 0.8s'}) 
        : style({borderRight: 'none', borderLeftColor: styling?.activeBorderColor && '#3d234f', borderLeftWidth: '3px', transition: 'border-color ease-in-out 0.8s'}))
        : '';    
    return (
        <div 
            className={headerStyling(styleName, styling?.hoverColor)} 
            onClick={clickTab}
        >
            {icon && (<i className={icon}></i>) }
            <span style={{marginLeft: '5px'}}>{text}</span>
            
        </div>
    );
};

const TabContent = (props: Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style'>) => {
    return (
        <div className={classnames(['p-1', style({minWidth: '85%'})])} style={props.style}>{props.children}</div>
    );
};


const headerStyling = (name?:string, hover?: string) => (
    classnames([
        'cursor-pointer', 
        'p-1.5', 
        'border border-solid', 
        'flex-1 text-center',
        style({
            minWidth: '25%',
            $nest: {
                "&:hover": {
                    background: hover
                }
            }
        }),
        name
    ])
)

export interface ITab extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style' | 'className'> {
    direction?: 'row' | 'col'; 
    styling?: IStyling
}


interface ITabItem extends ITab {
    text?: string;
    icon?: string;
    
}

interface IStyling{
    hoverColor?: string;
    activeBorderColor?: string;
}
interface ITabHeader extends ITab {
    text?: string;
    icon?: string;
    clickTab: any;
    childIndex: number;
    selectedIndex: number;
}