import { HTMLAttributes, ReactNode } from 'react';
export declare const Layout: (props: Pick<ILayout, 'children' | 'style' | 'type' | 'span'>) => JSX.Element;
export declare const LayoutItem: (props: Pick<HTMLAttributes<ReactNode>, 'children'>) => JSX.Element;
interface ILayout extends Pick<HTMLAttributes<ReactNode>, 'children' | 'style'> {
    type?: 'flex' | 'grid' | 'block';
    span: Array<number>;
}
export {};
