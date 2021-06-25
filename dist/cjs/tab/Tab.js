"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabItem = exports.Tab = void 0;
var react_1 = __importStar(require("react"));
require("./tab.css");
var Tab = function (props) {
    var itemHead = react_1.Children.toArray(props.children);
    var _a = react_1.default.useState(0), state = _a[0], setState = _a[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: 'dt-tab-head' }, itemHead.map(function (i, index) {
            return react_1.default.createElement(TabHeader, { text: i.props.text, icon: i.props.icon, clickTab: function () { return setState(index); }, childIndex: index, selectedIndex: state });
        })),
        react_1.default.createElement(TabContent, null, itemHead[state])));
};
exports.Tab = Tab;
var TabItem = function (props) {
    return react_1.default.createElement("div", null, props.children);
};
exports.TabItem = TabItem;
var TabHeader = function (_a) {
    var text = _a.text, icon = _a.icon, clickTab = _a.clickTab, childIndex = _a.childIndex, selectedIndex = _a.selectedIndex, style = _a.style;
    var styleName = childIndex === selectedIndex ? 'dt-tab-header-active' : '';
    return (react_1.default.createElement("div", { className: [styleName, 'dt-tab-header'].join(' '), style: style, onClick: clickTab },
        react_1.default.createElement("span", { style: { marginRight: '5px' } }, text),
        icon && (react_1.default.createElement("i", { className: icon }))));
};
var TabContent = function (props) {
    return (react_1.default.createElement("div", { className: 'dt-tab-content', style: props.style }, props.children));
};
//# sourceMappingURL=Tab.js.map