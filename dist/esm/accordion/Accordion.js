import React, { Children } from 'react';
import './accordion.css';
export var Accordion = function (props) {
    var _a = React.useState(0), state = _a[0], setState = _a[1];
    var itemHead = Children.toArray(props.children);
    return (React.createElement(React.Fragment, null, itemHead.map(function (i, index) {
        return React.createElement("div", { key: index },
            React.createElement(AccordionHeader, { element: i.props, childIndex: index, selectedIndex: state, itemClick: function () { return setState(index); } }),
            React.createElement(AccordionContent, { element: i.props, childIndex: index, selectedIndex: state }));
    })));
};
export var AccordionItem = function (props) {
    return React.createElement("div", null, props.children);
};
var AccordionHeader = function (props) {
    var res = props.childIndex === props.selectedIndex ? 'fa fa-minus' : 'fa fa-plus';
    return (React.createElement("div", { className: 'dt-accordion', onClick: props.itemClick },
        props.element.text,
        React.createElement("i", { className: res })));
};
var AccordionContent = function (props) {
    var res = props.childIndex === props.selectedIndex ? 'dt-accordion-active' : 'dt-accordion-null';
    return (React.createElement("div", { className: ['dt-accordion-content', res].join(' ') }, props.element.children));
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