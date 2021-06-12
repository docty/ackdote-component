"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
var react_1 = __importDefault(require("react"));
var Heading = function (props) {
    var text = props.text, type = props.type, style = props.style;
    if (type === 'H1') {
        return (react_1.default.createElement("h1", { style: style },
            " ",
            text,
            " "));
    }
    else if (type === 'H2') {
        return (react_1.default.createElement("h2", { style: style },
            " ",
            text,
            " "));
    }
    else if (type === 'H3') {
        return (react_1.default.createElement("h3", { style: style },
            " ",
            text,
            " "));
    }
    else if (type === 'H4') {
        return (react_1.default.createElement("h4", { style: style },
            " ",
            text,
            " "));
    }
    else if (type === 'H5') {
        return (react_1.default.createElement("h5", { style: style },
            " ",
            text,
            " "));
    }
    else {
        return (react_1.default.createElement("h6", { style: style },
            " ",
            text,
            " "));
    }
};
exports.Heading = Heading;
//# sourceMappingURL=Heading.js.map