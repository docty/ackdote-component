import React from 'react';
import './tab.css';
export var Tab = function (props) {
    return (React.createElement("div", { className: 'dt-tab' },
        props.children,
        React.createElement(TabContent, null, "Ghana")));
};
export var TabItem = function (props) {
    return (React.createElement("div", { className: 'dt-tab-header', style: props.style }, props.text));
};
var TabContent = function (props) {
    return (React.createElement("div", { style: props.style }, props.children));
};
//# sourceMappingURL=Tab.js.map