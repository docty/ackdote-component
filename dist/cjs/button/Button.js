"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
require("./button.css");
require("../font-awesome.min.css");
var Button = function (props) {
    var text = props.text, fullWidth = props.fullWidth, style = props.style, icon = props.icon, trailing = props.trailing, click = props.click;
    var length = fullWidth ? '100%' : 'auto';
    var direction = trailing === 'left' ? 'row' : 'row-reverse';
    var cssProp = __assign(__assign({}, style), { width: length, flexDirection: direction });
    return (react_1.default.createElement("button", { type: "button", style: cssProp, className: 'btn', onClick: click },
        icon && (react_1.default.createElement("i", { className: icon, style: { margin: '5px' } })),
        react_1.default.createElement("span", null, text)));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map