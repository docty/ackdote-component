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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './spinner.css';
export var Spinner = function (props) {
    if (props.type === 'circle') {
        return _jsx(Circle, {}, void 0);
    }
    else if (props.type === 'glow') {
        return _jsx(Glow, {}, void 0);
    }
    else if (props.type === 'classic') {
        return _jsx(Classic, {}, void 0);
    }
    else if (props.type === 'square') {
        return _jsx(Square, {}, void 0);
    }
    else {
        return _jsx(Basic, {}, void 0);
    }
};
var Glow = function () { return (_jsxs("div", __assign({ className: 'dt-spinner-glow' }, { children: [_jsx("div", {}, void 0),
        _jsx("div", {}, void 0),
        _jsx("div", {}, void 0)] }), void 0)); };
var Circle = function () { return (_jsx("div", { className: 'dt-spinner-circle' }, void 0)); };
var Basic = function () { return (_jsx("div", { className: 'dt-spinner-basic' }, void 0)); };
var Classic = function () { return (_jsx("div", { className: 'dt-spinner-classic' }, void 0)); };
var Square = function () { return (_jsx("div", __assign({ className: 'dt-spinner-square' }, { children: _jsx("div", { className: 'dt-spinner-square-inner' }, void 0) }), void 0)); };
//# sourceMappingURL=Spinner.js.map