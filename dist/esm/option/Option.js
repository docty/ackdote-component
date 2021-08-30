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
import './option.css';
export var Option = function (props) {
    return (_jsx("select", __assign({ className: 'dt-select', style: props.style }, { children: props.children }), void 0));
};
export var OptionItem = function (props) {
    var _a;
    return _jsx("option", __assign({ value: (_a = props.children) === null || _a === void 0 ? void 0 : _a.toString(), style: props.style }, { children: props.children }), void 0);
};
//# sourceMappingURL=Option.js.map