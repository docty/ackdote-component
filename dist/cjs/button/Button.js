"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
require("./button.css");
var Button = function (props) {
    var text = props.text, color = props.color, fullWidth = props.fullWidth, outline = props.outline;
    var length = fullWidth ? '100%' : 'auto';
    var borders = outline ? 'outline' : '';
    return (react_1.default.createElement("button", { type: "button", style: { width: length }, className: ["btn", color, borders].join(' ') }, text));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map