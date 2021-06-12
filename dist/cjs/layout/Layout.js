"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutItem = exports.Layout = void 0;
var react_1 = __importDefault(require("react"));
var Layout = function (props) {
    var _a;
    var layoutType = (_a = props.type) !== null && _a !== void 0 ? _a : 'block';
    var dimension = getLayoutDimension(props.span);
    var styleProp = Object.assign({}, props.style, { display: layoutType, gridTemplateColumns: dimension });
    console.log(styleProp);
    return (react_1.default.createElement("div", { style: styleProp }, props.children));
};
exports.Layout = Layout;
var LayoutItem = function (props) { return (react_1.default.createElement("div", { style: { display: 'inline-flex' } }, props.children)); };
exports.LayoutItem = LayoutItem;
var getLayoutDimension = function (item) {
    var result = '';
    item.forEach(function (element) {
        result = result + element.toString() + 'fr ';
    });
    console.log(result);
    return result.trimRight();
};
//# sourceMappingURL=Layout.js.map