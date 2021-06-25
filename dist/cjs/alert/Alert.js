"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
var react_1 = __importDefault(require("react"));
require("./alert.css");
var Alert = function (props) {
    var onCloseBtn = function () {
        var dd = document.getElementById('dt-alert-id');
        dd.style.display = 'none';
    };
    return (react_1.default.createElement("div", { id: 'dt-alert-id', className: 'dt-alert', style: props.style },
        props.children,
        react_1.default.createElement("span", { onClick: function () { return onCloseBtn(); }, className: 'fa fa-close' })));
};
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map