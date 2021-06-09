import React, { HTMLAttributes, ReactNode } from 'react';


export const Layout = (props: Pick<ILayout, 'children' | 'style' | 'type' | 'span'>) => {
    const layoutType = props.type ?? 'block';
    const dimension = getLayoutDimension(props.span);
    const styleProp = Object.assign({}, props.style, {display: layoutType, gridTemplateColumns: dimension});
    console.log(styleProp);
    return (
        <div style={styleProp} >
            {props.children}
        </div>
    );
};

export const LayoutItem = (props: Pick<HTMLAttributes<ReactNode>, 'children'>) => (
    <div style={{display: 'inline-flex'}}>
        {props.children}
    </div>
);

const getLayoutDimension = (item: Array<number>) => {
    let result = '';
    item.forEach(element => {
        result = result + element.toString() + 'fr '
    });
    console.log(result);
    return result.trimRight();
}

interface ILayout extends Pick<HTMLAttributes<ReactNode>, 'children' | 'style'> {
    type?: 'flex' | 'grid' | 'block'
    span: Array<number>
}


 