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
exports.AccordionItem = exports.Accordion = void 0;
var react_1 = __importStar(require("react"));
require("./accordion.css");
var Accordion = function (props) {
    var _a = react_1.default.useState(0), state = _a[0], setState = _a[1];
    var itemHead = react_1.Children.toArray(props.children);
    return (react_1.default.createElement(react_1.default.Fragment, null, itemHead.map(function (i, index) {
        return react_1.default.createElement("div", { key: index },
            react_1.default.createElement(AccordionHeader, { element: i.props, childIndex: index, selectedIndex: state, itemClick: function () { return setState(index); } }),
            react_1.default.createElement(AccordionContent, { element: i.props, childIndex: index, selectedIndex: state }));
    })));
};
exports.Accordion = Accordion;
var AccordionItem = function (props) {
    return react_1.default.createElement("div", null, props.children);
};
exports.AccordionItem = AccordionItem;
var AccordionHeader = function (props) {
    var res = props.childIndex === props.selectedIndex ? 'fa fa-minus' : 'fa fa-plus';
    return (react_1.default.createElement("div", { className: 'dt-accordion', onClick: props.itemClick },
        props.element.text,
        react_1.default.createElement("i", { className: res })));
};
var AccordionContent = function (props) {
    var res = props.childIndex === props.selectedIndex ? 'dt-accordion-active' : 'dt-accordion-null';
    return (react_1.default.createElement("div", { className: ['dt-accordion-content', res].join(' ') }, props.element.children));
};
// export interface ITab extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
//     style?: CSSProperties; 
// }
// interface ITabItem extends ITab {
//     text?: string;
//     icon?: string;
// }
// interface ITabHeader extends ITab {
//     text?: string;
//     icon?: string;
//     clickTab: any;
//     childIndex: number;
//     selectedIndex: number;
// }
//# sourceMappingURL=Accordion.js.map