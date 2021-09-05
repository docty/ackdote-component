var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
import { style } from 'typestyle';
export var Option = function (props) {
    return (_jsx("select", __assign({ value: props.value, onChange: props.onValueChange, className: classnames([props.className, optionStyling]), style: props.style }, { children: props.item.map(function (res, index) { return (_jsx("option", __assign({ value: res.toLowerCase() }, { children: res }), index)); }) }), void 0));
};
var optionStyling = style({
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
});
//# sourceMappingURL=Option.js.map