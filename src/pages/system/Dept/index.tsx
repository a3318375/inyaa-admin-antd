import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import UpdateForm from './components/UpdateForm';
import { list9 } from '@/services/ant-design-pro/blog';

const columns: ProColumns<API.InyaaBlog>[] = [
  {
    title: '标题',
    width: 400,
    dataIndex: 'title',
  },
  {
    title: '状态',
    width: 140,
    dataIndex: 'status',
    valueEnum: {
      true: { text: '发布', status: 'Processing' },
      false: { text: '草稿', status: 'Success' },
    },
  },
  {
    title: '访问量',
    dataIndex: 'views',
    ellipsis: true,
  },
  {
    title: '评论数',
    dataIndex: 'comments',
    ellipsis: true,
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
    <ProTable<API.InyaaBlog>
      columns={columns}
      request={async (params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        const blogList = await list9({ page: params.current, size: params.pageSize });
        return Promise.resolve({
          data: blogList.data?.content,
          success: true,
          total: blogList.data?.totalElements,
        });
      }}
      rowKey="id"
      pagination={{
        showQuickJumper: true,
        defaultPageSize: 10,
      }}
      search={{
        optionRender: false,
        collapsed: false,
      }}
      dateFormatter="string"
      headerTitle="文章列表"
      toolBarRender={() => [<UpdateForm type={0} key="create" authCode="1001" />]}
    />
  );
};
