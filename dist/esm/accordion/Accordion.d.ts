import React, { CSSProperties, HTMLAttributes } from 'react';
import './accordion.css';
export declare const Accordion: (props: IAccordion) => JSX.Element;
export declare const AccordionItem: (props: any) => JSX.Element;
export interface IAccordion extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
    text?: string;
    icon?: string;
}
