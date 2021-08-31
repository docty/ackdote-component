import classnames from 'classnames';
import { ChangeEventHandler, CSSProperties, HTMLAttributes } from 'react';
import { style } from 'typestyle';

export const TextField = (props: ITextField) => {
    const {type, placeholder, style, onValueChange, value, className} = props
    return (
       
            <input 
                type={type}
                className={classnames([inputStyling, className])}
                placeholder={placeholder}
                onChange={onValueChange}
                value={value}
                style={style}
            />
    );
};

const inputStyling = style({
    background: "#f4f5f9",
    border: "2px solid #f4f5f9",
    fontSize: "0.85em",
    color: "#4f5d77",
    paddingLeft: "20px",
    borderRadius: "4px",
    height: "45px",
    padding: "0.5rem 0.75rem",
    width: "100%",
    appearance: "none",
    marginBottom: "0.75rem",
    $nest: {
      "&:focus": {
        background: "#fff",
        outline: "none",
        border: "2px solid #f4f5f9",
      },
    },
});

export interface ITextField extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    type?: 'text' | 'email' | 'tel' | 'number' | 'password';
    placeholder?: string;
    onValueChange: ChangeEventHandler<HTMLInputElement>;
    style?: CSSProperties;
    value?: string;
}