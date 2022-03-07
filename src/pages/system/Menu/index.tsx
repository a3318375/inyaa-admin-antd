import React from 'react';
import { Button, Tooltip, Tag } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { list4 } from '@/services/ant-design-pro/permission';

export type Status = {
  color: string;
  text: string;
};

const columns: ProColumns<API.InyaaSysPermission>[] = [
  {
    title: '菜单名称',
    width: 120,
    dataIndex: 'title',
  },
  {
    title: '组件name',
    width: 120,
    dataIndex: 'name',
  },
  {
    title: '组件path',
    width: 120,
    dataIndex: 'path',
  },
  {
    title: '组件component',
    width: 120,
    dataIndex: 'component',
  },
  {
    title: '操作',
    width: 164,
    key: 'option',
    valueType: 'option',
    render: () => [<a key="1">编辑</a>, <a key="2">删除</a>],
  },
];

const buttonRowRender = (record: API.InyaaSysPermission) => {
  return (
    <ProTable<API.InyaaSysPermission>
      columns={columns}
      request={async (params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        const data = await list4({ permission: { parentId: record.id } });
        return Promise.resolve({
          data: data.data,
          success: true,
        });
      }}
      rowKey="id"
      pagination={false}
      search={false}
      dateFormatter="string"
      headerTitle={false}
      options={false}
    />
  );
};

const expandedRowRender = (row: API.InyaaSysPermission) => {
  return (
    <ProTable<API.InyaaSysPermission>
      columns={columns}
      request={async (params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        const data = await list4({ permission: { parentId: row.id } });
        return Promise.resolve({
          data: data.data,
          success: true,
        });
      }}
      rowKey="id"
      pagination={false}
      expandable={{ expandedRowRender: (record) => buttonRowRender(record) }}
      search={false}
      dateFormatter="string"
      headerTitle={false}
      options={false}
    />
  );
};

export default () => {
  return (
    <ProTable<API.InyaaSysPermission>
      columns={columns}
      request={async (params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        const data = await list4({ permission: { parentId: 0 } });
        return Promise.resolve({
          data: data.data,
          success: true,
        });
      }}
      rowKey="id"
      pagination={false}
      expandable={{ expandedRowRender }}
      search={false}
      dateFormatter="string"
      headerTitle="嵌套表格"
      toolBarRender={() => [
        <Button key="primary" type="primary">
          创建应用
        </Button>,
      ]}
    />
  );
};
