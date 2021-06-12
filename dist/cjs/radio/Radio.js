"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var react_1 = __importDefault(require("react"));
var Radio = function (props) {
    return (react_1.default.createElement("div", { style: props.style },
        react_1.default.createElement("input", { type: "radio", name: props.name }),
        react_1.default.createElement("label", null, props.text)));
};
exports.Radio = Radio;
//# sourceMappingURL=Radio.js.map