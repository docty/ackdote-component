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
import classnames from 'classnames';
import { style } from 'typestyle';
export var Tab = function (props) {
    var itemHead = Children.toArray(props.children);
    var _a = React.useState(0), state = _a[0], setState = _a[1];
    var alignment = props.direction === 'row' ? 'col' : 'row';
    return (_jsxs("div", __assign({ className: classnames(['relative', 'flex', "flex-" + props.direction]) }, { children: [_jsx("div", __assign({ className: classnames(['flex', "flex-" + alignment, 'w-full']) }, { children: itemHead.map(function (i, index) {
                    return _jsx(TabHeader, { text: i.props.text, icon: i.props.icon, clickTab: function () { return setState(index); }, childIndex: index, selectedIndex: state, direction: props.direction }, void 0);
                }) }), void 0),
            _jsx(TabContent, { children: itemHead[state] }, void 0)] }), void 0));
};
export var TabItem = function (props) {
    return _jsx("div", { children: props.children }, void 0);
};
var TabHeader = function (_a) {
    var text = _a.text, icon = _a.icon, clickTab = _a.clickTab, childIndex = _a.childIndex, selectedIndex = _a.selectedIndex, direction = _a.direction, styling = _a.styling;
    var styleName = childIndex === selectedIndex ? (direction === 'col'
        ? style({ borderBottom: 'none', borderTopColor: (styling === null || styling === void 0 ? void 0 : styling.activeBorderColor) && '#3d234f', borderTopWidth: '3px', transition: 'border-color ease-in-out 0.8s' })
        : style({ borderRight: 'none', borderLeftColor: (styling === null || styling === void 0 ? void 0 : styling.activeBorderColor) && '#3d234f', borderLeftWidth: '3px', transition: 'border-color ease-in-out 0.8s' }))
        : '';
    return (_jsxs("div", __assign({ className: headerStyling(styleName, styling === null || styling === void 0 ? void 0 : styling.hoverColor), onClick: clickTab }, { children: [icon && (_jsx("i", { className: icon }, void 0)),
            _jsx("span", __assign({ style: { marginLeft: '5px' } }, { children: text }), void 0)] }), void 0));
};
var TabContent = function (props) {
    return (_jsx("div", __assign({ className: classnames(['p-1', style({ minWidth: '85%' })]), style: props.style }, { children: props.children }), void 0));
};
var headerStyling = function (name, hover) { return (classnames([
    'cursor-pointer',
    'p-1.5',
    'border border-solid',
    'flex-1 text-center',
    style({
        minWidth: '25%',
        $nest: {
            "&:hover": {
                background: hover
            }
        }
    }),
    name
])); };
//# sourceMappingURL=Tab.js.map