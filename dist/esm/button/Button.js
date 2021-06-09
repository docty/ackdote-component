import React from 'react';
import './button.css';
export var Button = function (props) {
    var text = props.text, color = props.color, fullWidth = props.fullWidth, outline = props.outline;
    var length = fullWidth ? '100%' : 'auto';
    var borders = outline ? 'outline' : '';
    return (React.createElement("button", { type: "button", style: { width: length }, className: ["btn", color, borders].join(' ') }, text));
};
//# sourceMappingURL=Button.js.map