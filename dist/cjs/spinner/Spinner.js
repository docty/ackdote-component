"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var react_1 = __importDefault(require("react"));
require("./spinner.css");
var Spinner = function (props) {
    if (props.type === 'circle') {
        return react_1.default.createElement(Circle, null);
    }
    else {
        return react_1.default.createElement(Bar, null);
    }
};
exports.Spinner = Spinner;
var Bar = function () { return (react_1.default.createElement("div", { className: 'dt-spinner-bar' },
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null))); };
var Circle = function () { return (react_1.default.createElement("div", { className: 'dt-spinner-circle' },
    react_1.default.createElement("div", { className: 'dt-spinner-circle-inner' },
        react_1.default.createElement("div", null)))); };
exports.Spinner.defaultProps = {
    type: 'bar'
};
//# sourceMappingURL=Spinner.js.map