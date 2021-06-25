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
import './progressbar.css';
export var Progressbar = function (props) {
    var allStyle = __assign({ width: props.width + "%" }, props.style);
    return (React.createElement("div", { className: 'dt-progressbar' },
        React.createElement("div", { style: allStyle, className: 'dt-progressbar-inner' },
            props.width,
            "%")));
};
//# sourceMappingURL=Progressbar.js.map