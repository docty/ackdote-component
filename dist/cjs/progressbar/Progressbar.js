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
exports.Progressbar = void 0;
var react_1 = __importDefault(require("react"));
require("./progressbar.css");
var Progressbar = function (props) {
    var allStyle = __assign({ width: props.width + "%" }, props.style);
    return (react_1.default.createElement("div", { className: 'dt-progressbar' },
        react_1.default.createElement("div", { style: allStyle, className: 'dt-progressbar-inner' },
            props.width,
            "%")));
};
exports.Progressbar = Progressbar;
//# sourceMappingURL=Progressbar.js.map