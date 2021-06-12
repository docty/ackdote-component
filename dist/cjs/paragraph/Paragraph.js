"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = void 0;
var react_1 = __importDefault(require("react"));
var Paragraph = function (props) {
    var text = props.text, style = props.style;
    return (react_1.default.createElement("p", { style: style }, text));
};
exports.Paragraph = Paragraph;
//# sourceMappingURL=Paragraph.js.map