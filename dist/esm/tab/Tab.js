import React, { Children } from 'react';
import './tab.css';
export var Tab = function (props) {
    var itemHead = Children.toArray(props.children);
    var _a = React.useState(0), state = _a[0], setState = _a[1];
    return (React.createElement("div", null,
        React.createElement("div", { className: 'dt-tab-head' }, itemHead.map(function (i, index) {
            return React.createElement(TabHeader, { text: i.props.text, icon: i.props.icon, clickTab: function () { return setState(index); }, childIndex: index, selectedIndex: state });
        })),
        React.createElement(TabContent, null, itemHead[state])));
};
export var TabItem = function (props) {
    return React.createElement("div", null, props.children);
};
var TabHeader = function (_a) {
    var text = _a.text, icon = _a.icon, clickTab = _a.clickTab, childIndex = _a.childIndex, selectedIndex = _a.selectedIndex, style = _a.style;
    var styleName = childIndex === selectedIndex ? 'dt-tab-header-active' : '';
    return (React.createElement("div", { className: [styleName, 'dt-tab-header'].join(' '), style: style, onClick: clickTab },
        React.createElement("span", { style: { marginRight: '5px' } }, text),
        icon && (React.createElement("i", { className: icon }))));
};
var TabContent = function (props) {
    return (React.createElement("div", { className: 'dt-tab-content', style: props.style }, props.children));
};
//# sourceMappingURL=Tab.js.map