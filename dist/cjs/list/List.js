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
export var List = function (props) {
    if (props.type === 'ordered') {
        return (_jsx("ol", __assign({ style: props.style }, { children: props.children }), void 0));
    }
    else {
        return (_jsx("ul", __assign({ style: props.style, className: classnames(props.className) }, { children: props.children }), void 0));
    }
};
export var ListItem = function (props) {
    return (_jsx("li", __assign({ style: props.style, className: classnames(props.className) }, { children: props.children }), void 0));
};
//# sourceMappingURL=List.js.map