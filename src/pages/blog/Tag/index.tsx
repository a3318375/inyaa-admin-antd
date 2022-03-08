import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import UpdateForm from './components/UpdateForm';
import { list2 } from '@/services/ant-design-pro/blogTag';

const columns: ProColumns<API.InyaaTag>[] = [
  {
    title: '分类名称',
    width: 400,
    dataIndex: 'name',
  },
  {
    title: '备注',
    width: 400,
    dataIndex: 'name',
  },
  {
    title: '创建时间',
    width: 140,
    key: 'since',
    dataIndex: 'createTime',
    valueType: 'date',
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: (text, record) => [
      <UpdateForm id={record.id} type={1} key="edit" authCode="1002" />,
      <a key="delete">删除</a>,
    ],
  },
];

export default () => {
  return (
    <ProTable<API.InyaaTag>
      columns={columns}
      request={async (params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        const tagList = await list2({ page: params.current, size: params.pageSize });
        return Promise.resolve({
          data: tagList.data,
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
      headerTitle="标签列表"
      toolBarRender={() => [<UpdateForm type={0} key="create" authCode="1001" />]}
    />
  );
};
