"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionItem = exports.Option = void 0;
var react_1 = __importDefault(require("react"));
require("./option.css");
var Option = function (props) {
    return (react_1.default.createElement("select", { className: 'dt-select', style: props.style }, props.children));
};
exports.Option = Option;
var OptionItem = function (props) {
    var _a;
    return react_1.default.createElement("option", { value: (_a = props.children) === null || _a === void 0 ? void 0 : _a.toString(), style: props.style }, props.children);
};
exports.OptionItem = OptionItem;
//# sourceMappingURL=Option.js.map