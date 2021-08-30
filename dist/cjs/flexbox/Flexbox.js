var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
export var Flexbox = function (props) {
    return (_jsx("div", __assign({ style: props.style, className: styling(props) }, { children: props.children }), void 0));
};
var styling = function (props) {
    var direction = props.direction, justifyContent = props.justifyContent, alignItems = props.alignItems, alignContent = props.alignContent;
    return classnames([
        'flex flex-wrap',
        "flex-" + direction,
        "justify-" + justifyContent,
        "items-" + alignItems,
        "content-" + alignContent,
    ]);
};
//# sourceMappingURL=Flexbox.js.map