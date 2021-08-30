import  { CSSProperties, HTMLAttributes } from 'react';
import '../index.css'
import classnames from 'classnames';

export const Checkbox = (props: ICheckbox) => { 
    const {style, text, click} = props;
    return (
        <div style={style} className={classnames(props.className)}>
            <input type="checkbox" onClick={click} />
            <label>{text}</label>
        </div>

    );
};


export interface ICheckbox extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    text: string;
    style?: CSSProperties;
    click?: () => void;
}