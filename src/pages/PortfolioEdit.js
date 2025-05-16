import React, { useState } from 'react';
import { Form, Input, Button, message, List, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { TextArea } = Input;

function PortfolioEdit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: '项目标题',
      description: '项目描述',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ]);

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

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        title: '新项目',
        description: '项目描述',
        imageUrl: 'https://via.placeholder.com/300',
      },
    ]);
  };

  const removeProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>编辑作品集</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={projects}
          renderItem={(project) => (
            <List.Item>
              <Card
                title={
                  <Input
                    defaultValue={project.title}
                    onChange={(e) => {
                      const newProjects = projects.map((p) =>
                        p.id === project.id
                          ? { ...p, title: e.target.value }
                          : p
                      );
                      setProjects(newProjects);
                    }}
                  />
                }
                extra={
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => removeProject(project.id)}
                  />
                }
              >
                <TextArea
                  defaultValue={project.description}
                  rows={4}
                  onChange={(e) => {
                    const newProjects = projects.map((p) =>
                      p.id === project.id
                        ? { ...p, description: e.target.value }
                        : p
                    );
                    setProjects(newProjects);
                  }}
                />
                <div style={{ marginTop: 16 }}>
                  <Input
                    defaultValue={project.imageUrl}
                    placeholder="图片URL"
                    onChange={(e) => {
                      const newProjects = projects.map((p) =>
                        p.id === project.id
                          ? { ...p, imageUrl: e.target.value }
                          : p
                      );
                      setProjects(newProjects);
                    }}
                  />
                </div>
              </Card>
            </List.Item>
          )}
        />
        <Button
          type="dashed"
          onClick={addProject}
          style={{ width: '100%', marginBottom: 16 }}
          icon={<PlusOutlined />}
        >
          添加项目
        </Button>
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

export default PortfolioEdit; 