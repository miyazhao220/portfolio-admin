import React from 'react';
import { Typography, Form, Input, Button, message } from 'antd';

const { Title, Paragraph } = Typography;

function ContactEdit() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('提交内容:', values);
    message.success('联系方式已更新！');
  };

  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2}>编辑联系方式</Title>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="wechat" label="微信" rules={[{ required: true, message: '请输入微信' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="linkedin" label="LinkedIn" rules={[{ required: true, message: '请输入LinkedIn链接' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">保存</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactEdit; 