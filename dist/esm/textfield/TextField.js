import React from 'react';
import './textfield.css';
export var TextField = function (props) {
    var type = props.type, placeholder = props.placeholder, style = props.style, change = props.change;
    return (React.createElement("input", { type: type, className: "dt-input", style: style, placeholder: placeholder, onChange: change }));
};
//# sourceMappingURL=TextField.js.map