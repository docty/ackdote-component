import React from 'react';
import './alert.css';
export var Alert = function (props) {
    var onCloseBtn = function () {
        var dd = document.getElementById('dt-alert-id');
        dd.style.display = 'none';
    };
    return (React.createElement("div", { id: 'dt-alert-id', className: 'dt-alert', style: props.style },
        props.children,
        React.createElement("span", { onClick: function () { return onCloseBtn(); }, className: 'fa fa-close' })));
};
//# sourceMappingURL=Alert.js.map