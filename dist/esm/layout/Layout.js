import React from 'react';
export var Layout = function (props) {
    var _a;
    var layoutType = (_a = props.type) !== null && _a !== void 0 ? _a : 'block';
    var dimension = getLayoutDimension(props.span);
    var styleProp = Object.assign({}, props.style, { display: layoutType, gridTemplateColumns: dimension });
    console.log(styleProp);
    return (React.createElement("div", { style: styleProp }, props.children));
};
export var LayoutItem = function (props) { return (React.createElement("div", { style: { display: 'inline-flex' } }, props.children)); };
var getLayoutDimension = function (item) {
    var result = '';
    item.forEach(function (element) {
        result = result + element.toString() + 'fr ';
    });
    console.log(result);
    return result.trimRight();
};
//# sourceMappingURL=Layout.js.map