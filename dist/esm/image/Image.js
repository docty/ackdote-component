import React from 'react';
export var Image = function (props) {
    var source = props.source, alt = props.alt, style = props.style;
    return (React.createElement("img", { src: source, alt: alt, style: style }));
};
//# sourceMappingURL=Image.js.map