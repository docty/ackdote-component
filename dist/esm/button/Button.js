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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../font-awesome.min.css';
import classnames from 'classnames';
export var Button = function (props) {
    return (_jsxs("button", __assign({ type: "button", style: { color: '#fff' }, className: styling(props), onClick: props.click }, { children: [props.icon && (_jsx("i", { className: props.icon, style: { margin: '5px' } }, void 0)),
            _jsx("span", { children: props.text }, void 0)] }), void 0));
};
var styling = function (props) {
    var bgColor = props.bgColor;
    return classnames([
        "bg-" + bgColor + "-400",
        'p-2 px-5 rounded-xl',
        "hover:bg-" + bgColor + "-300"
    ]);
};
Button.defaultProps = {
    bgColor: 'blue'
};
//# sourceMappingURL=Button.js.map