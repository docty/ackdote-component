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
    else if (props.type === 'glow') {
        return react_1.default.createElement(Glow, null);
    }
    else if (props.type === 'classic') {
        return react_1.default.createElement(Classic, null);
    }
    else if (props.type === 'square') {
        return react_1.default.createElement(Square, null);
    }
    else {
        return react_1.default.createElement(Basic, null);
    }
};
exports.Spinner = Spinner;
var Glow = function () { return (react_1.default.createElement("div", { className: 'dt-spinner-glow' },
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null))); };
var Circle = function () { return (react_1.default.createElement("div", { className: 'dt-spinner-circle' })); };
var Basic = function () { return (react_1.default.createElement("div", { className: 'dt-spinner-basic' })); };
var Classic = function () { return (react_1.default.createElement("div", { className: 'dt-spinner-classic' })); };
var Square = function () { return (react_1.default.createElement("div", { className: 'dt-spinner-square' },
    react_1.default.createElement("div", { className: 'dt-spinner-square-inner' }))); };
//# sourceMappingURL=Spinner.js.map