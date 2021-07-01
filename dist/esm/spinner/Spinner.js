import React from 'react';
import './spinner.css';
export var Spinner = function (props) {
    if (props.type === 'circle') {
        return React.createElement(Circle, null);
    }
    else if (props.type === 'glow') {
        return React.createElement(Glow, null);
    }
    else if (props.type === 'classic') {
        return React.createElement(Classic, null);
    }
    else if (props.type === 'square') {
        return React.createElement(Square, null);
    }
    else {
        return React.createElement(Basic, null);
    }
};
var Glow = function () { return (React.createElement("div", { className: 'dt-spinner-glow' },
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
var Circle = function () { return (React.createElement("div", { className: 'dt-spinner-circle' })); };
var Basic = function () { return (React.createElement("div", { className: 'dt-spinner-basic' })); };
var Classic = function () { return (React.createElement("div", { className: 'dt-spinner-classic' })); };
var Square = function () { return (React.createElement("div", { className: 'dt-spinner-square' },
    React.createElement("div", { className: 'dt-spinner-square-inner' }))); };
//# sourceMappingURL=Spinner.js.map