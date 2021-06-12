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
import React from 'react';
import './button.css';
export var Button = function (props) {
    var text = props.text, fullWidth = props.fullWidth, style = props.style, click = props.click;
    var length = fullWidth ? '100%' : 'auto';
    var cssProp = __assign(__assign({}, style), { width: length });
    return (React.createElement("button", { type: "button", style: cssProp, className: "btn", onClick: click }, text));
};
//# sourceMappingURL=Button.js.map