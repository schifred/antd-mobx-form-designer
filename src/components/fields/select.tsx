import React from 'react';
import { Form, Select } from 'antd';
import { BaseProps } from './types';
import { prefix } from '../../constants';

export default function select(props: BaseProps){
  const { style, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-select-wrap`} style={style}>
      <Select className={`${prefix}-select`} {...rest} />
    </Form.Item>    
  )
}