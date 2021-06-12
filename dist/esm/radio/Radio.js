import React from 'react';
export var Radio = function (props) {
    return (React.createElement("div", { style: props.style },
        React.createElement("input", { type: "radio", name: props.name }),
        React.createElement("label", null, props.text)));
};
//# sourceMappingURL=Radio.js.map