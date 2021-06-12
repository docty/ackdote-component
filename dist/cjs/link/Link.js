"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
var Link = function (props) {
    var text = props.text, href = props.href, style = props.style;
    return (react_1.default.createElement("a", { href: href, style: style }, text));
};
exports.Link = Link;
//# sourceMappingURL=Link.js.map