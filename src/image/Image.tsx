import   { CSSProperties, HTMLAttributes } from 'react';
import classnames from 'classnames';


export const Image = (props: IImage) => {
    const { source, alt, style, className, width, height } = props
    
    return (
        <img src={source} height={height} width={width} alt={alt} style={style} className={classnames(className)} />
    );
};


export interface IImage extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    source: string;
    alt: string;
    width?: string;
    height?: string;
    style?: CSSProperties;
}