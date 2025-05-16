import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

function AboutEdit() {
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
      <h2>编辑关于我</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          title: '关于我',
          content: '在这里输入关于我的内容...',
        }}
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[{ required: true, message: '请输入标题' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="content"
          label="内容"
          rules={[{ required: true, message: '请输入内容' }]}
        >
          <TextArea rows={6} />
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

export default AboutEdit; 