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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import './progressbar.css';
export var Progressbar = function (props) {
    var allStyle = __assign({ width: props.width + "%" }, props.style);
    return (_jsx("div", __assign({ className: 'dt-progressbar' }, { children: _jsxs("div", __assign({ style: allStyle, className: 'dt-progressbar-inner' }, { children: [props.width, "%"] }), void 0) }), void 0));
};
//# sourceMappingURL=Progressbar.js.map