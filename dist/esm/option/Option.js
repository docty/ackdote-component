import React from 'react';
export var Option = function (props) {
    return (React.createElement("select", { style: props.style }, props.children));
};
export var OptionItem = function (props) {
    return React.createElement("option", { style: props.style }, props.children);
};
//# sourceMappingURL=Option.js.map