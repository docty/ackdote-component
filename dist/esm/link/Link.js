import React from 'react';
export var Link = function (props) {
    var text = props.text, href = props.href, style = props.style;
    return (React.createElement("a", { href: href, style: style }, text));
};
//# sourceMappingURL=Link.js.map