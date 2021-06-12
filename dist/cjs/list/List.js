"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = exports.List = void 0;
var react_1 = __importDefault(require("react"));
var List = function (props) {
    if (props.type === 'ordered') {
        return (react_1.default.createElement("ol", { style: props.style }, props.children));
    }
    else {
        return (react_1.default.createElement("ul", { style: props.style }, props.children));
    }
};
exports.List = List;
var ListItem = function (props) {
    return (react_1.default.createElement("li", { style: props.style }, props.children));
};
exports.ListItem = ListItem;
//# sourceMappingURL=List.js.map