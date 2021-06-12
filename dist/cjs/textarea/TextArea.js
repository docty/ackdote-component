"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
var react_1 = __importDefault(require("react"));
var TextArea = function (props) {
    var change = props.change, style = props.style;
    return (react_1.default.createElement("textarea", { style: style, onChange: change }));
};
exports.TextArea = TextArea;
//# sourceMappingURL=TextArea.js.map