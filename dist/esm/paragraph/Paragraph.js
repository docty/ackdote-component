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
export var Paragraph = function (props) {
    var text = props.text, style = props.style, className = props.className;
    return (_jsx("p", __assign({ style: style, className: classnames(className) }, { children: text }), void 0));
};
//# sourceMappingURL=Paragraph.js.map