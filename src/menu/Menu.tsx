import { HTMLAttributes, ReactNode } from "react"
import classnames from 'classnames';
import { style } from 'typestyle';
import  './menu.css';
//import { Link } from "react-router-dom";

export const Menu = (props : IMenu) => {
    return(
        <ul className={classnames(['list-none', props.className])} style={props.style}>
            {props.children}
        </ul>
    )
}

export const MenuItem = (props: IMenuItem) => {

    const menuclick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hasSub?: boolean) => {
        if(!hasSub) return false;
        const subMenu = e.currentTarget.nextSibling as HTMLDivElement;
        subMenu.classList.toggle('hide'); 
        console.log(subMenu.className) 
    }
    return(
        <li className={'mb-3'}>
            <a href={props.url} className={menuItemStyling(props.className)} style={props.style}  onClick={(e) => menuclick(e, props.hasSub)}>
                <i className={classnames(['mr-3',props.icon])} ></i>
                <span>{props.text}</span>
                {props.hasSub && <i className={classnames(['fa fa-user', subMenuIconStyling])} ></i>}
            </a>
            {props.hasSub && <div className={classnames(['ml-4', 'hide'])}>{props.children}</div>}
        </li>
    ) 
}

export const MenuSub = (props:IMenuSub) => {
    return(
        <a href={props.url} className={style({display: 'block'})}>{props.text}</a>
    )
}

const menuItemStyling = (className?: string) => {
    return classnames([
        'p-3',
        'relative',
        style({
            color: '#292f46',
            borderRadius: '5px',
            display: 'block'
        }),
        className

    ])
}

const subMenuIconStyling = style({
    position: 'absolute',
    right: '15px',
})
 

export interface IMenu extends IDefault {}

export interface IMenuItem extends IDefault {
    text?: string;
    url: string;
    icon?: string;
    hasSub?: boolean;
}

export interface IMenuSub extends IDefault {
    url: string;
    text?: string;
}


export interface IDefault extends  Pick<HTMLAttributes<ReactNode>, 'children' | 'className' | 'style'> {}