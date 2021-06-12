"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableItem = exports.TableHeader = exports.TableRow = exports.Table = void 0;
var react_1 = __importDefault(require("react"));
var Table = function (props) {
    return (react_1.default.createElement("table", { style: props.style }, props.children));
};
exports.Table = Table;
var TableRow = function (props) {
    return (react_1.default.createElement("tr", { style: props.style }, props.children));
};
exports.TableRow = TableRow;
var TableHeader = function (props) {
    return (react_1.default.createElement("th", { style: props.style }, props.children));
};
exports.TableHeader = TableHeader;
var TableItem = function (props) {
    return (react_1.default.createElement("td", { style: props.style }, props.children));
};
exports.TableItem = TableItem;
//# sourceMappingURL=Table.js.map