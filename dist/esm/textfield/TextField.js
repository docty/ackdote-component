import React from 'react';
import './textfield.css';
export var TextField = function (props) {
    var type = props.type, placeholder = props.placeholder, style = props.style, icon = props.icon, change = props.change;
    return (React.createElement("div", { style: style, className: 'dt-input-wrapper' },
        icon &&
            React.createElement("span", { className: 'dt-input-icon' },
                React.createElement("i", { className: icon })),
        React.createElement("input", { type: type, className: "dt-input", placeholder: placeholder, onChange: change })));
};
//# sourceMappingURL=TextField.js.map