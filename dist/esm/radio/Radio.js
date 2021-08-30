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
import './radio.css';
export var Radio = function (props) {
    return (_jsxs("div", __assign({ style: props.style }, { children: [_jsx("span", __assign({ className: 'dt-radio-panel' }, { children: _jsx("input", { type: "radio", name: props.name, className: 'dt-radio', id: props.id }, void 0) }), void 0),
            _jsx("label", __assign({ htmlFor: props.id }, { children: props.text }), void 0)] }), void 0));
};
//# sourceMappingURL=Radio.js.map