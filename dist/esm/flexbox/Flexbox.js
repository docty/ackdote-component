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
export var Flexbox = function (props) {
    var allStyle = __assign({ display: 'flex', flexWrap: 'wrap', flexDirection: props.direction, alignContent: props.alignContent, alignItems: props.alignItems, padding: '5px' }, props.style);
    return (React.createElement("div", { style: allStyle }, props.children));
};
//# sourceMappingURL=Flexbox.js.map