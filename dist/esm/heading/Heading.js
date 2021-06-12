import React from 'react';
export var Heading = function (props) {
    var text = props.text, type = props.type, style = props.style;
    if (type === 'H1') {
        return (React.createElement("h1", { style: style },
            " ",
            text,
            " "));
    }
    else if (type === 'H2') {
        return (React.createElement("h2", { style: style },
            " ",
            text,
            " "));
    }
    else if (type === 'H3') {
        return (React.createElement("h3", { style: style },
            " ",
            text,
            " "));
    }
    else if (type === 'H4') {
        return (React.createElement("h4", { style: style },
            " ",
            text,
            " "));
    }
    else if (type === 'H5') {
        return (React.createElement("h5", { style: style },
            " ",
            text,
            " "));
    }
    else {
        return (React.createElement("h6", { style: style },
            " ",
            text,
            " "));
    }
};
//# sourceMappingURL=Heading.js.map