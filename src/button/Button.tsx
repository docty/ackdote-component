import '../font-awesome.min.css';
import classnames from 'classnames';
import { style  } from 'typestyle';
import { CSSProperties, HTMLAttributes } from 'react';

export const Button = (props: IButton) => {
    
    
    
    return (
        <button 
            type="button" 
            style={props.style}
            className={styling(props)}
            onClick={props.click}
        >
            {props.icon &&  (<i className={props.icon} style={{margin: '5px'}}></i>) }
            <span>{props.text}</span>
        </button>
        
    );
};
const styling = (props: IButton) => {
    const { bgColor } = props;
    return classnames([
        `bg-${bgColor}-400`, 
        'p-2 px-5 rounded-xl', 
        `hover:bg-${bgColor}-300`,
        style({color: '#fff'}),
        props.className
    ]);
} 

 
export interface IButton extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    bgColor?: 'blue' | 'green' | 'pink' | 'red',
    text: string;
    fullWidth?: boolean;
    click?: () => void;
    icon?: string;
    trailing?: 'left' | 'right';
    style?: CSSProperties ;
}


Button.defaultProps = {
    bgColor: 'blue'
}