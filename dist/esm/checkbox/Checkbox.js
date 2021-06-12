import React from 'react';
export var Checkbox = function (props) {
    var style = props.style, text = props.text, click = props.click;
    return (React.createElement("div", { style: style },
        React.createElement("input", { type: "checkbox", onClick: click }),
        React.createElement("label", null, text)));
};
//# sourceMappingURL=Checkbox.js.map