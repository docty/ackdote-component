import React from 'react';
export var List = function (props) {
    if (props.type === 'ordered') {
        return (React.createElement("ol", { style: props.style }, props.children));
    }
    else {
        return (React.createElement("ul", { style: props.style }, props.children));
    }
};
export var ListItem = function (props) {
    return (React.createElement("li", { style: props.style }, props.children));
};
//# sourceMappingURL=List.js.map