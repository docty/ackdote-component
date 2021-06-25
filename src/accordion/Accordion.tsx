import React, { Children, CSSProperties, HTMLAttributes } from 'react';
import './accordion.css';



export const Accordion = (props: IAccordion) => { 
    const [state, setState] = React.useState(0);
    const itemHead = Children.toArray(props.children);
    
     
    return (
        <>
            {itemHead.map((i:any, index:number) => 
                <div key={index}>
                    <AccordionHeader 
                        element={i.props} 
                        childIndex={index}
                        selectedIndex={state} 
                        itemClick={() => setState(index)}
                    />
                    <AccordionContent 
                        element={i.props} 
                        childIndex={index}
                        selectedIndex={state} 
                    />
                </div>
            )}
        </>
    );
};


export const AccordionItem = (props: any) => {
    return <div>{props.children}</div>;
};

const AccordionHeader = (props: any) => {
    const res =  props.childIndex === props.selectedIndex ? 'fa fa-minus' : 'fa fa-plus';
    return (
        <div className={'dt-accordion'} onClick={props.itemClick}>
            {props.element.text}
            <i className={res}></i>
        </div>
    );
};

const AccordionContent = (props: Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style'> | any) => {
    const res =  props.childIndex === props.selectedIndex ? 'dt-accordion-active' : 'dt-accordion-null';
    
    return (
        <div className={['dt-accordion-content', res].join(' ')}>
            {props.element.children}
        </div>
    );
};

export interface IAccordion extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
    text?: string;
    icon?: string;
}

// export interface ITab extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
//     style?: CSSProperties; 
// }

// interface ITabItem extends ITab {
//     text?: string;
//     icon?: string;
// }
// interface ITabHeader extends ITab {
//     text?: string;
//     icon?: string;
//     clickTab: any;
//     childIndex: number;
//     selectedIndex: number;
// }
