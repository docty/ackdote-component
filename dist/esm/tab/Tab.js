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
import React, { Children } from 'react';
import './tab.css';
export var Tab = function (props) {
    var itemHead = Children.toArray(props.children);
    var _a = React.useState(0), state = _a[0], setState = _a[1];
    return (_jsxs("div", { children: [_jsx("div", __assign({ className: 'dt-tab-head' }, { children: itemHead.map(function (i, index) {
                    return _jsx(TabHeader, { text: i.props.text, icon: i.props.icon, clickTab: function () { return setState(index); }, childIndex: index, selectedIndex: state }, void 0);
                }) }), void 0),
            _jsx(TabContent, { children: itemHead[state] }, void 0)] }, void 0));
};
export var TabItem = function (props) {
    return _jsx("div", { children: props.children }, void 0);
};
var TabHeader = function (_a) {
    var text = _a.text, icon = _a.icon, clickTab = _a.clickTab, childIndex = _a.childIndex, selectedIndex = _a.selectedIndex, style = _a.style;
    var styleName = childIndex === selectedIndex ? 'dt-tab-header-active' : '';
    return (_jsxs("div", __assign({ className: [styleName, 'dt-tab-header'].join(' '), style: style, onClick: clickTab }, { children: [_jsx("span", __assign({ style: { marginRight: '5px' } }, { children: text }), void 0),
            icon && (_jsx("i", { className: icon }, void 0))] }), void 0));
};
var TabContent = function (props) {
    return (_jsx("div", __assign({ className: 'dt-tab-content', style: props.style }, { children: props.children }), void 0));
};
//# sourceMappingURL=Tab.js.map