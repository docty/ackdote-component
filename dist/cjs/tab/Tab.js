"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabItem = exports.Tab = void 0;
var react_1 = __importDefault(require("react"));
require("./tab.css");
var Tab = function (props) {
    return (react_1.default.createElement("div", { className: 'dt-tab' },
        props.children,
        react_1.default.createElement(TabContent, null, "Ghana")));
};
exports.Tab = Tab;
var TabItem = function (props) {
    return (react_1.default.createElement("div", { className: 'dt-tab-header', style: props.style }, props.text));
};
exports.TabItem = TabItem;
var TabContent = function (props) {
    return (react_1.default.createElement("div", { style: props.style }, props.children));
};
//# sourceMappingURL=Tab.js.map