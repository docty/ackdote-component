"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
var react_1 = __importDefault(require("react"));
require("./textfield.css");
var TextField = function (props) {
    var type = props.type, placeholder = props.placeholder, style = props.style, icon = props.icon, change = props.change;
    return (react_1.default.createElement("div", { style: style, className: 'dt-input-wrapper' },
        icon &&
            react_1.default.createElement("span", { className: 'dt-input-icon' },
                react_1.default.createElement("i", { className: icon })),
        react_1.default.createElement("input", { type: type, className: "dt-input", placeholder: placeholder, onChange: change })));
};
exports.TextField = TextField;
//# sourceMappingURL=TextField.js.map