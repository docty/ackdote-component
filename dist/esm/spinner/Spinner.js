import React from 'react';
import './spinner.css';
export var Spinner = function (props) {
    if (props.type === 'circle') {
        return React.createElement(Circle, null);
    }
    else {
        return React.createElement(Bar, null);
    }
};
var Bar = function () { return (React.createElement("div", { className: 'dt-spinner-bar' },
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
var Circle = function () { return (React.createElement("div", { className: 'dt-spinner-circle' },
    React.createElement("div", { className: 'dt-spinner-circle-inner' },
        React.createElement("div", null)))); };
Spinner.defaultProps = {
    type: 'bar'
};
//# sourceMappingURL=Spinner.js.map