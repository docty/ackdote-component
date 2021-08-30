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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { Children } from 'react';
import './accordion.css';
import classnames from 'classnames';
export var Accordion = function (props) {
    var _a = React.useState(0), state = _a[0], setState = _a[1];
    var itemHead = Children.toArray(props.children);
    return (_jsx(_Fragment, { children: itemHead.map(function (i, index) {
            return _jsxs("div", { children: [_jsx(AccordionHeader, { element: i.props, childIndex: index, selectedIndex: state, itemClick: function () { return setState(index); } }, void 0),
                    _jsx(AccordionContent, { element: i.props, childIndex: index, selectedIndex: state }, void 0)] }, index);
        }) }, void 0));
};
export var AccordionItem = function (props) {
    return _jsx("div", { children: props.children }, void 0);
};
var AccordionHeader = function (props) {
    var res = props.childIndex === props.selectedIndex ? 'fa fa-minus' : 'fa fa-plus';
    return (_jsxs("div", __assign({ className: headerStyling(), onClick: props.itemClick }, { children: [props.element.text, _jsx("i", { className: res }, void 0)] }), void 0));
};
var AccordionContent = function (props) {
    var res = props.childIndex === props.selectedIndex ? 'dt-accordion-active' : 'dt-accordion-null';
    return (_jsx("div", __assign({ className: ['dt-accordion-content', res].join(' ') }, { children: props.element.children }), void 0));
};
var headerStyling = function () {
    return classnames([
        'dt-accordion',
        'bg-blue-300 flex justify-between p-3',
        'cursor-pointer border'
    ]);
};
//# sourceMappingURL=Accordion.js.map