import  { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';


export const Option = (props: IOption) => { 
    
    return (

		<select value={props.value}  onChange={props.onValueChange} className={classnames([props.className, optionStyling])} style={props.style}>
			{
				props.item.map((res, index: number) => (
					<option key={index} value={res.toLowerCase()}>{res}</option>
				))
			}
		</select>
    );
};
 
const optionStyling = style({
	border: '1px solid #cfdbe6',
	appearance: 'revert',
	background: "#f4f5f9",
    fontSize: "0.85em",
    color: "#4f5d77",
    paddingLeft: "20px",
    borderRadius: "4px",
    height: "45px",
    padding: "0.5rem 0.75rem",
    width: "100%",
    marginBottom: "0.75rem",
    $nest: {
      "&:focus": {
        background: "#fff",
        outline: "none",
        border: "2px solid #f4f5f9",
      },
    },
})
export interface IOption extends Pick<HTMLAttributes<ReactNode>,  'className'> {
    style?: CSSProperties;
    value: string;
    item: Array<string>;
    onValueChange?: React.ChangeEventHandler<HTMLSelectElement>;
}