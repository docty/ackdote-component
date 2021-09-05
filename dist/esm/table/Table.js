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
import classnames from 'classnames';
import { style } from 'typestyle';
export var Table = function (props) {
    return (_jsx("table", __assign({ style: props.style, className: classnames([props.className, tableStyling]) }, { children: props.children }), void 0));
};
export var TableRow = function (props) {
    return (_jsx("tr", __assign({ style: props.style, className: classnames(['text-left', props.className]) }, { children: props.children }), void 0));
};
export var TableHeader = function (props) {
    return (_jsx("th", __assign({ style: props.style, className: classnames([props.className, tableHeader]) }, { children: props.children }), void 0));
};
export var TableItem = function (props) {
    return (_jsx("td", __assign({ style: props.style, className: classnames([props.className, tableItem]) }, { children: props.children }), void 0));
};
var tableStyling = style({
    borderCollapse: 'collapse',
    color: '#495057',
    border: '1px solid #eff2f7',
    width: '100%'
});
var tableHeader = style({
    border: '1px solid #eff2f7',
    padding: '0.75rem',
    cursor: 'pointer',
    position: 'relative'
});
var tableItem = style({
    border: '1px solid #eff2f7',
    padding: '0.75rem'
});
//# sourceMappingURL=Table.js.map