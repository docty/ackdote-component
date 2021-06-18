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
exports.Flexbox = void 0;
var react_1 = __importDefault(require("react"));
var Flexbox = function (props) {
    var allStyle = __assign({ display: 'flex', flexWrap: 'wrap', flexDirection: props.direction, alignContent: props.alignContent, alignItems: props.alignItems, padding: '5px' }, props.style);
    return (react_1.default.createElement("div", { style: allStyle }, props.children));
};
exports.Flexbox = Flexbox;
//# sourceMappingURL=Flexbox.js.map