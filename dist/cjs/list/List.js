"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = exports.List = void 0;
var react_1 = __importDefault(require("react"));
var List = function (props) {
    var listStyle = props.bulletLess ? 'none' : '';
    return (react_1.default.createElement("ul", { style: { listStyleType: listStyle } }, props.children));
};
exports.List = List;
var ListItem = function (props) {
    return (react_1.default.createElement("li", null, props.children));
};
exports.ListItem = ListItem;
//# sourceMappingURL=List.js.map