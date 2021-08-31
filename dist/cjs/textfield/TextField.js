import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
import { style } from 'typestyle';
export var TextField = function (props) {
    var type = props.type, placeholder = props.placeholder, style = props.style, onValueChange = props.onValueChange, value = props.value, className = props.className;
    return (_jsx("input", { type: type, className: classnames([inputStyling, className]), placeholder: placeholder, onChange: onValueChange, value: value, style: style }, void 0));
};
var inputStyling = style({
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
//# sourceMappingURL=TextField.js.map