"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionItem = exports.Option = void 0;
var react_1 = __importDefault(require("react"));
var Option = function (props) {
    return (react_1.default.createElement("select", { style: props.style }, props.children));
};
exports.Option = Option;
var OptionItem = function (props) {
    return react_1.default.createElement("option", { style: props.style }, props.children);
};
exports.OptionItem = OptionItem;
//# sourceMappingURL=Option.js.map