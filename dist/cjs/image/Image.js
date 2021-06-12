"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var react_1 = __importDefault(require("react"));
var Image = function (props) {
    var source = props.source, alt = props.alt, style = props.style;
    return (react_1.default.createElement("img", { src: source, alt: alt, style: style }));
};
exports.Image = Image;
//# sourceMappingURL=Image.js.map