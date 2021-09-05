import   { CSSProperties, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { style as styles} from 'typestyle';


export const Image = (props: IImage) => {
    const { source, alt, style, className, width, height, circle } = props
    
    return (
        <img src={source} height={height} width={width} alt={alt} style={style} className={classnames([circle && styles({borderRadius: '50%'}), className])} />
    );
};


export interface IImage extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    source: string;
    alt: string;
    width?: string;
    height?: string;
    style?: CSSProperties;
    circle?: boolean
}