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
import '../font-awesome.min.css';
export var Button = function (props) {
    var text = props.text, fullWidth = props.fullWidth, style = props.style, icon = props.icon, trailing = props.trailing, click = props.click;
    var length = fullWidth ? '100%' : 'auto';
    var direction = trailing === 'left' ? 'row' : 'row-reverse';
    var cssProp = __assign(__assign({}, style), { width: length, flexDirection: direction });
    return (React.createElement("button", { type: "button", style: cssProp, className: 'btn', onClick: click },
        icon && (React.createElement("i", { className: icon, style: { margin: '5px' } })),
        React.createElement("span", null, text)));
};
//# sourceMappingURL=Button.js.map