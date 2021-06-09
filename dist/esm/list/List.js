import React from 'react';
export var List = function (props) {
    var listStyle = props.bulletLess ? 'none' : '';
    return (React.createElement("ul", { style: { listStyleType: listStyle } }, props.children));
};
export var ListItem = function (props) {
    return (React.createElement("li", null, props.children));
};
//# sourceMappingURL=List.js.map