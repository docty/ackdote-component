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
import './alert.css';
export var Alert = function (props) {
    var onCloseBtn = function () {
        var dd = document.getElementById('dt-alert-id');
        dd.style.display = 'none';
    };
    return (_jsxs("div", __assign({ id: 'dt-alert-id', className: 'dt-alert', style: props.style }, { children: [props.children, _jsx("span", { onClick: function () { return onCloseBtn(); }, className: 'fa fa-close' }, void 0)] }), void 0));
};
//# sourceMappingURL=Alert.js.map