var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Form, Input } from 'antd';
import { prefix } from '../../constants';
export default function hidden(props) {
    const { style } = props, rest = __rest(props, ["style"]);
    return (<Form.Item className={`${prefix}-hidden-wrap`} style={style}>
      <Input className={`${prefix}-hidden`} {...rest} disabled/>
    </Form.Item>);
}
