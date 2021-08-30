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
import './table.css';
export var Table = function (props) {
    return (_jsx("table", __assign({ style: props.style, className: 'dt-table' }, { children: props.children }), void 0));
};
export var TableRow = function (props) {
    return (_jsx("tr", __assign({ style: props.style }, { children: props.children }), void 0));
};
export var TableHeader = function (props) {
    return (_jsx("th", __assign({ style: props.style }, { children: props.children }), void 0));
};
export var TableItem = function (props) {
    return (_jsx("td", __assign({ style: props.style }, { children: props.children }), void 0));
};
//# sourceMappingURL=Table.js.map