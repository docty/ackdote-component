import { Fragment } from "react";
import { Link } from "react-router-dom";
import { style } from 'typestyle';

export const Breadcrumb = (props :IBreadcrumb) => (
    <div>
        {
            props.items.map((item, index, data) => (
                data.length !== (index+1) ? 
                    <Fragment key={index}>
                        { item.icon && <i className={item.icon}></i>} 
                        <Link to={item.url} className={breadCrumb(props.properties?.hoverColor)} style={{color: props.properties?.inActiveColor}}>{item.text}</Link>
                        <span>/</span>
                    </Fragment> :
                    <Fragment key={index}>
                        <p className={'mx-1 inline text-gray-500'} 
                            style={{color: props.properties?.activeColor}}>
                            {item.text!}
                        </p>
                    </Fragment> 
            ))
        }
    </div>
    
)

export interface IBreadcrumb {
    items: {
        icon?: string;
        text?: string;
        url: string;
    }[];
    properties? : {
        activeColor: string;
        inActiveColor: string;
        hoverColor: string;
    }
}

const breadCrumb = (colorname?: string) => (
    style({
        margin: '0 0.25rem',
        color: '#000',
        $nest: {
            "&:hover" : {
                color: colorname
            }
        }
    })
)
