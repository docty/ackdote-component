import React from 'react';
import './option.css';
export var Option = function (props) {
    return (React.createElement("select", { className: 'dt-select', style: props.style }, props.children));
};
export var OptionItem = function (props) {
    var _a;
    return React.createElement("option", { value: (_a = props.children) === null || _a === void 0 ? void 0 : _a.toString(), style: props.style }, props.children);
};
//# sourceMappingURL=Option.js.map