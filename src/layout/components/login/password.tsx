import React from 'react'
import type { FormProps } from 'antd'
import { Form, Input, Select, Button, Space } from 'antd'
import './password.scss'
type FieldType = {
  username?: string,
  password?: string
}
const { Option } = Select
const selectBefore = (
  <Select defaultValue="+86">
    <Option value="+86">+86</Option>
  </Select>
);
const Password: React.FC = () => {
  return (
    <>
      <div className="password-page">
        <Form>
          <Form.Item<FieldType>>
            <Input addonBefore={selectBefore} defaultValue="mysite" placeholder='手机号' />
          </Form.Item>
          <Form.Item<FieldType>>
            <Space>
              <Space.Compact>
                <Input.Password placeholder='请输入密码' />
                <Button danger >忘记密码</Button>
              </Space.Compact>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Password