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
import { jsxs as _jsxs } from "react/jsx-runtime";
export var Heading = function (props) {
    var text = props.text, type = props.type, style = props.style;
    if (type === 'H1') {
        return (_jsxs("h1", __assign({ style: style }, { children: [" ", text, " "] }), void 0));
    }
    else if (type === 'H2') {
        return (_jsxs("h2", __assign({ style: style }, { children: [" ", text, " "] }), void 0));
    }
    else if (type === 'H3') {
        return (_jsxs("h3", __assign({ style: style }, { children: [" ", text, " "] }), void 0));
    }
    else if (type === 'H4') {
        return (_jsxs("h4", __assign({ style: style }, { children: [" ", text, " "] }), void 0));
    }
    else if (type === 'H5') {
        return (_jsxs("h5", __assign({ style: style }, { children: [" ", text, " "] }), void 0));
    }
    else {
        return (_jsxs("h6", __assign({ style: style }, { children: [" ", text, " "] }), void 0));
    }
};
//# sourceMappingURL=Heading.js.map