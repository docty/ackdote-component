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
import '../index.css';
export var Checkbox = function (props) {
    var style = props.style, text = props.text, click = props.click;
    return (_jsxs("div", __assign({ style: style }, { children: [_jsx("input", { type: "checkbox", onClick: click }, void 0),
            _jsx("label", { children: text }, void 0)] }), void 0));
};
//# sourceMappingURL=Checkbox.js.map