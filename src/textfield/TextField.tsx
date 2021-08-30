import classnames from 'classnames';
import { CSSProperties, HTMLAttributes } from 'react';
import './textfield.css';

 
export const TextField = (props: ITextField) => {
    const {type, placeholder, style, icon,change, value, className} = props
    
    
    return (
        <div style={style} className={'dt-input-wrapper'}>
            {
                icon &&  
                <span className={'dt-input-icon'}>
                    <i className={icon}></i>
                </span>
            }
            <input 
                type={type}
                className={classnames(["dt-input", className])}
                placeholder={placeholder}
                onChange={change}
                value={value}
            />
        </div>
    );
};


export interface ITextField extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    type: 'text' | 'password';
    placeholder?: string;
    change?: (e:any) => void;
    style?: CSSProperties;
    icon?: string;
    value?: string;
}