import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

function ContactEdit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // 这里应该调用后端 API 保存数据
      message.success('保存成功');
      navigate('/dashboard');
    } catch (error) {
      message.error('保存失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>编辑联系方式</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          email: 'example@email.com',
          phone: '123-456-7890',
          address: '地址',
          social: {
            github: 'https://github.com/username',
            linkedin: 'https://linkedin.com/in/username',
          },
        }}
      >
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            { required: true, message: '请输入邮箱' },
            { type: 'email', message: '请输入有效的邮箱地址' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="电话"
          rules={[{ required: true, message: '请输入电话' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="地址"
          rules={[{ required: true, message: '请输入地址' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="社交媒体">
          <Input.Group compact>
            <Form.Item
              name={['social', 'github']}
              noStyle
              rules={[{ required: true, message: '请输入 GitHub 链接' }]}
            >
              <Input style={{ width: '50%' }} placeholder="GitHub" />
            </Form.Item>
            <Form.Item
              name={['social', 'linkedin']}
              noStyle
              rules={[{ required: true, message: '请输入 LinkedIn 链接' }]}
            >
              <Input style={{ width: '50%' }} placeholder="LinkedIn" />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            保存
          </Button>
          <Button
            style={{ marginLeft: 8 }}
            onClick={() => navigate('/dashboard')}
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactEdit; 