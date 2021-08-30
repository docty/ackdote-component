import '../font-awesome.min.css';
import classnames from 'classnames';
import { CSSProperties } from 'react';

export const Button = (props: IButton) => {
    
    
    
    return (
        <button 
            type="button" 
            style={{color: '#fff'}}
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
        `hover:bg-${bgColor}-300`
    ]);
} 


export interface IButton {
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