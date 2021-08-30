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
import './textfield.css';
export var TextField = function (props) {
    var type = props.type, placeholder = props.placeholder, style = props.style, icon = props.icon, change = props.change, value = props.value;
    return (_jsxs("div", __assign({ style: style, className: 'dt-input-wrapper' }, { children: [icon &&
                _jsx("span", __assign({ className: 'dt-input-icon' }, { children: _jsx("i", { className: icon }, void 0) }), void 0),
            _jsx("input", { type: type, className: "dt-input", placeholder: placeholder, onChange: change, value: value }, void 0)] }), void 0));
};
//# sourceMappingURL=TextField.js.map