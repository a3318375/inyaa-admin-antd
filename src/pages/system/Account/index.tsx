import { useState } from 'react';
import { Menu } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { MailOutlined } from '@ant-design/icons';
import UpdateForm from './components/UpdateForm';
import { list } from '@/services/ant-design-pro/user';

const columns: ProColumns<API.InyaaSysUserVo>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
    width: 80,
  },
  {
    title: '昵称',
    dataIndex: 'name',
    width: 140,
  },
  {
    title: '账号',
    dataIndex: 'username',
    width: 140,
  },
  {
    title: '角色',
    dataIndex: 'roleName',
    width: 140,
  },
  {
    title: '状态',
    width: 140,
    dataIndex: 'enabled',
    hideInSearch: true,
    valueEnum: {
      true: { text: '启用', status: 'Success' },
      false: { text: '停用', status: 'Success' },
    },
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: (text, record) => [
      <UpdateForm id={record.id} type={1} key="edit" authCode="1018" />,
      <a key="delete">删除</a>,
    ],
  },
];

export default () => {
  const [key, setKey] = useState(1);
  return (
    <ProTable<API.InyaaSysUserVo>
      columns={columns}
      rowKey="id"
      pagination={false}
      tableRender={(_, dom) => {
        return (
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Menu
              onSelect={(e) => setKey(e.key as unknown as number)}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu>
            <div
              style={{
                flex: 1,
              }}
            >
              {dom}
            </div>
          </div>
        );
      }}
      params={{
        key,
      }}
      request={async () => {
        const userList = await list({ user: { deptId: key } });
        return {
          success: true,
          data: userList.data,
        };
      }}
      dateFormatter="string"
      headerTitle="账号管理"
      toolBarRender={() => [<UpdateForm type={0} key="create" authCode="1017" />]}
    />
  );
};
