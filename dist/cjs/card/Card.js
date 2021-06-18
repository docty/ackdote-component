"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(require("react"));
require("./card.css");
var Card = function (props) {
    return (react_1.default.createElement("div", { className: 'dt-card', style: props.style }, props.children));
};
exports.Card = Card;
//# sourceMappingURL=Card.js.map