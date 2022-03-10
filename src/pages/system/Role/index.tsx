import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import UpdateForm from './components/UpdateForm';
import { list3 } from '@/services/ant-design-pro/role';

const columns: ProColumns<API.InyaaSysRole>[] = [
  {
    title: '角色名称',
    width: 100,
    dataIndex: 'roleName',
  },
  {
    title: '角色标记',
    width: 100,
    dataIndex: 'roleKey',
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: (text, record) => [
      <UpdateForm id={record} type={1} key="edit" authCode="1022" />,
      <a key="delete">删除</a>,
    ],
  },
];

export default () => {
  return (
    <ProTable<API.InyaaSysRole>
      columns={columns}
      request={async (params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        const roleList = await list3();
        return Promise.resolve({
          data: roleList.data,
          success: true,
        });
      }}
      rowKey="id"
      pagination={false}
      search={{
        optionRender: false,
        collapsed: false,
      }}
      dateFormatter="string"
      headerTitle="角色列表"
      toolBarRender={() => [<UpdateForm type={0} key="create" authCode="1021" />]}
    />
  );
};
