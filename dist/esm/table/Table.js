import React from 'react';
export var Table = function (props) {
    return (React.createElement("table", { style: props.style }, props.children));
};
export var TableRow = function (props) {
    return (React.createElement("tr", { style: props.style }, props.children));
};
export var TableHeader = function (props) {
    return (React.createElement("th", { style: props.style }, props.children));
};
export var TableItem = function (props) {
    return (React.createElement("td", { style: props.style }, props.children));
};
//# sourceMappingURL=Table.js.map