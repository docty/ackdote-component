import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
import { style as styles } from 'typestyle';
export var Image = function (props) {
    var source = props.source, alt = props.alt, style = props.style, className = props.className, width = props.width, height = props.height, circle = props.circle;
    return (_jsx("img", { src: source, height: height, width: width, alt: alt, style: style, className: classnames([circle && styles({ borderRadius: '50%' }), className]) }, void 0));
};
//# sourceMappingURL=Image.js.map